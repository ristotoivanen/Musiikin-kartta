import { test } from '@playwright/test';

// Väliaikainen mittaus #143: selvitä täsmälleen ylivuotava DOM-solmu ennen CSS-muutosta.
for (const url of ['/oppi/savelnimet/savelet-ja-intervallit.html', '/book/osa-2.html#savelet-ja-intervallit']) {
  test(`QA143 diagnostic card and swipe (${url})`, async ({ page, isMobile, browserName }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(url);
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    const lesson = page.locator('[data-intervallimuisti]');
    const cards = lesson.locator('.intervallikortit');
    const choice = lesson.locator('.intervallivalinta');
    for (let i = 0; i < 8; i += 1) await cards.getByRole('button', { name: 'Seuraava kortti' }).click();
    await choice.getByRole('button', { name: 'Aloita monivalinta' }).click();
    await choice.getByRole('button', { name: 'Näytä vihje' }).click();
    await choice.getByRole('radio', { name: '3 pa' }).check();
    await choice.getByRole('button', { name: 'Tarkista' }).click();
    for (const kind of ['.intervallikortit', '.intervallivalinta']) {
      const report = await lesson.locator(kind).evaluate(node => {
        const parent = node.getBoundingClientRect();
        return {
          container: { left: parent.left, right: parent.right, width: parent.width },
          offenders: Array.from(node.querySelectorAll('*'))
            .filter(e => e.getClientRects().length > 0)
            .map(e => {
              const rect = e.getBoundingClientRect();
              const css = getComputedStyle(e);
              return {
                name: e.tagName.toLowerCase() + (typeof e.className === 'string' ? '.' + e.className : ''),
                text: (e.textContent || '').trim().slice(0, 75),
                left: +rect.left.toFixed(2), right: +rect.right.toFixed(2),
                width: +rect.width.toFixed(2), scrollWidth: e.scrollWidth,
                clientWidth: e.clientWidth, display: css.display,
                minWidth: css.minWidth, overflowWrap: css.overflowWrap,
                whiteSpace: css.whiteSpace, padding: css.padding, margin: css.margin,
              };
            }).filter(e => e.right > parent.right + 1)
            .sort((a, b) => b.right - a.right).slice(0, 16),
        };
      });
      console.log('QA143_OVERFLOW ' + JSON.stringify({ url, browserName, isMobile, kind, report }));
    }
    if (isMobile && browserName === 'chromium' && url.includes('/oppi/')) {
      await lesson.locator('summary').tap();
      const scroller = lesson.getByRole('region', { name: 'Intervallitaulukon vieritys' });
      const table = scroller.getByRole('table');
      await table.scrollIntoViewIfNeeded();
      const metrics = await scroller.evaluate(s => {
        const rect = s.getBoundingClientRect();
        const table = s.querySelector('table')!.getBoundingClientRect();
        const x = Math.round(rect.left + rect.width / 2);
        const y = Math.round(Math.max(rect.top + 40, Math.min(rect.bottom - 16, table.top + 350)));
        const target = document.elementFromPoint(x, y);
        return { x, y, rect: rect.toJSON(), table: table.toJSON(),
          scrollWidth: s.scrollWidth, clientWidth: s.clientWidth, scrollLeft: s.scrollLeft,
          target: target?.outerHTML.slice(0, 200),
          overflowX: getComputedStyle(s).overflowX, touchAction: getComputedStyle(s).touchAction };
      });
      const session = await page.context().newCDPSession(page);
      try {
        await session.send('Input.synthesizeScrollGesture', {
          x: metrics.x, y: metrics.y, xDistance: -150,
          gestureSourceType: 'touch', preventFling: true,
        });
      } catch (e) { console.log('QA143_SWIPE_ERROR ' + String(e)); }
      const afterGesture = await scroller.evaluate(s => ({ left: s.scrollLeft, max: s.scrollWidth - s.clientWidth }));
      await session.send('Input.dispatchTouchEvent', {
        type: 'touchStart', touchPoints: [{ x: metrics.x, y: metrics.y }],
      });
      for (let i = 1; i <= 9; i += 1) {
        await session.send('Input.dispatchTouchEvent', {
          type: 'touchMove',
          touchPoints: [{ x: metrics.x - i * 16, y: metrics.y }],
        });
      }
      await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      await page.waitForTimeout(200);
      const afterTouch = await scroller.evaluate(s => ({ left: s.scrollLeft, max: s.scrollWidth - s.clientWidth }));
      console.log('QA143_SWIPE ' + JSON.stringify({ metrics, afterGesture, afterTouch }));
    }
  });
}
