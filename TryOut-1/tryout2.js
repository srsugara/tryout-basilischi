const cheerioReq = require("cheerio-req");

cheerioReq("https://refactory.id/", (err, $) => {
    if(err){
      console.log(err);
    }
    if('' == $("title")){
      console.log('The result is not HTML');
    }else{
      console.log('The result is HTML');
      console.log('The title is '+$("title").text());
    }
});

// const tinyreq = require("tinyreq");
//
// tinyreq("https://refactory.id/", (err, body) => {
//     console.log(err || body);
// });
