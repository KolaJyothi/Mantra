const cheerio=require('cheerio')
const request=require('request')

request('https://stackoverflow.com/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(response.body);
    const headTags = [];
    $('head > *').each((_, elm) => {
        if(elm.name=='meta'){
        headTags.push({ name: elm.attribs.name, attribs: elm.attribs.content });
        }
      });
      console.log(headTags);
  }
});