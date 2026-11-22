import {expect, test} from '@playwright/test';

for (const path of [
  '/testit/ensimmaiset-nelja-iskua.html',
  '/assets/soitinpankki/ensimmaiset-nelja-iskua-steel.html',
]) {
  for (const size of [
    {width:320,height:568},
    {width:375,height:667},
  ]) {
    test(path.split('/').at(-1)+' '+size.width+'×'+size.height+' M1 player and all beat guides fit',async ({page})=>{
      await page.setViewportSize(size);
      await page.goto(path);
      await page.locator('button[data-mode="M1"]').click();
      await page.locator('#start').click();
      await expect(page.locator('#message')).toContainText('Pulssi käy: soita itse');
      await expect.poll(async ()=>{
        const selectors=['#stop','#phase','#timeline'];
        const rects=await Promise.all(selectors.map(sel=>page.locator(sel).boundingBox()));
        return rects.every(rect=>rect!==null && rect.y >= -1 && rect.y + rect.height <= size.height+1);
      },{timeout:6000}).toBe(true);
      const viewport=await page.evaluate(()=>({
        scrollWidth:document.documentElement.scrollWidth,
        timelineBottom:document.querySelector('#timeline')!.getBoundingClientRect().bottom,
        stopTop:document.querySelector('#stop')!.getBoundingClientRect().top,
      }));
      expect(viewport.scrollWidth).toBeLessThanOrEqual(size.width);
      expect(viewport.timelineBottom).toBeLessThanOrEqual(size.height+1);
      expect(viewport.stopTop).toBeGreaterThanOrEqual(-1);
      await page.locator('#stop').click();
      await expect(page.locator('#message')).toHaveText('Pysäytetty');
    });
  }
}
