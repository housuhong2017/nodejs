#!/usr/bin/node

const http = require('http'),
      cheerio = require('cheerio');

var address =  'http://edu.51.com/courselist/index-zh5-p1.html';



http.get(address,(res)=>{
  var html='';
  //console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`)
  //console.log(res.headers);
  //console.log();
  res.on('data',(data)=>{
    html += data;
  });
  res.on('end',()=>{
    var $ = cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName = $(this).find('a').text(),
      cTime = $(this).find('p.f1').text(),
      cTarget = $(this).find('div.course_target').text(),
      cURL = $(this).find('a').attr('href');

    if(cTime==='')return;

    console.log('课程名称：',cName);
    console.log('课程时长：',cTime);
    console.log('课程目标：',cTarget);
    console.log('课程地址：',cURL);
    console.log('');
    });
  });
});
