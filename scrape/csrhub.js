const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");
const axios = require("axios");

const scrapecsr = async () => {
  for (let i = 1; i < 450; i++) {
    try {
      const html = await axios.get(`https://www.csrhub.com/csrhub?page=${i}`);
      const $ = await cheerio.load(html.data, {
        normalizeWhitespace: true,
        xmlMode: true
      });
      $("tr").each((i, el) => {
        let text = $(el)
          .text()
          .replace(/\s\+/g, "");
        writeStream.write(`${text} \n`);
      });

      console.log(`scraping page ${i} complete`);
    } catch (err) {
      console.log(err);
    }
  }
};

scrapecsr();
