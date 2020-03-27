const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36')

    await page.goto('http://www.corporatecritic.org/companiesatoz/AtoZ.aspx')
    await page.waitForSelector('#AtoZList a')

    const sections = await page.$$('#AtoZList a')
    for (const button of sections) {
      button.click()
    }
  } catch(err) {
    console.log('scrape err', err)
  }
})()

