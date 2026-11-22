import { test } from '@playwright/test';
test.describe('MK-20261117-01 layout geometry (diagnostic only)', () => {
  for (const width of [320,375]) {
    test('layout '+width, async ({page}) => {
      await page.setViewportSize({width,height:width===320?568:667});
      await page.goto('/testit/ensimmaiset-nelja-iskua.html');
      await page.locator('[data-mode="M1"]').click();
      const collect=async (phase:string) => {
        const boxes=await page.evaluate(() => {
          const rect=(selector:string)=>{const el=document.querySelector(selector);if(!el)return null;const box=el.getBoundingClientRect();
            return {top:Math.round(box.top),bottom:Math.round(box.bottom),height:Math.round(box.height)};};
          return {screen:innerHeight,scroll:scrollY,bodyHeight:document.body.scrollHeight,
            pageHeight:document.documentElement.scrollHeight,
            actions:rect('#start'),stop:rect('#stop'),phase:rect('#phase'),phasePanel:rect('.phase-head'),
            beatPanel:rect('#beats'),timeline:rect('#timeline'),audioinfo:rect('#audioinfo'),
            modeCard:rect('.modes'),message:rect('#message'),
            panel1:rect('.panel'),panel2:rect('.panel:nth-of-type(2)'),
            scrollBehavior:getComputedStyle(document.documentElement).scrollBehavior};
        });
        console.log('GEOMETRY '+width+' '+phase+' '+JSON.stringify(boxes));
      };
      await collect('before');
      await page.locator('#start').click();
      await collect('immediately');
      await page.waitForTimeout(400);
      await collect('after400');
      await page.waitForTimeout(1400);
      await collect('after1800');
    });
  }
});
