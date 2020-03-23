const request = require("request");
const cheerio = require("cheerio");
cheerioTableparser = require("cheerio-tableparser");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");

for (let i = 1; i < 50; i++) {
  request(
    `https://www.csrhub.com/csrhub?page=${i}`,
    (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html, {
          normalizeWhitespace: true,
          xmlMode: true
      });

        $('tr').each((i, el) => {
          let text = $(el);
            .text()
            .replace(/\s\+/g, '')
          writeStream.write(`${text} \n`)
        })
        console.log('scraping complete');
      }
    }
  );
}
