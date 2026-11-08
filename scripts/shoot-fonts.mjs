import { chromium } from '@playwright/test';
const b = await chromium.launch();
const c1 = await b.newContext({viewport:{width:1440,height:900}});
const p = await c1.newPage();
await p.goto('http://localhost:3001/de/', {waitUntil:'load'});
await p.waitForTimeout(1200);
await p.screenshot({path:'test-results/premium-shots/font-de-1440.png'});
console.log('DE', JSON.stringify(await p.evaluate(() => ({
  h1: getComputedStyle(document.querySelector('h1')).fontFamily,
  body: getComputedStyle(document.body).fontFamily }))));
await p.goto('http://localhost:3001/zh/', {waitUntil:'load'});
await p.waitForTimeout(1200);
await p.screenshot({path:'test-results/premium-shots/font-zh-1440.png'});
console.log('ZH', JSON.stringify(await p.evaluate(() => ({
  h1: getComputedStyle(document.querySelector('h1')).fontFamily,
  body: getComputedStyle(document.body).fontFamily }))));
await p.goto('http://localhost:3001/de/termin-buchen/', {waitUntil:'load'});
await p.waitForTimeout(900);
await p.screenshot({path:'test-results/premium-shots/font-booking-1440.png'});
await b.close();
console.log('DONE');
