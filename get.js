var request = require("request");
const _=require('underscore');
const env = require('dotenv').config();

var options = { method: 'GET',
  url: 'https://api.setlist.fm/rest/1.0/search/setlists',
  qs: 
   { artistName: 'Pearl Jam',
     cityName: 'Amsterdam',
     year: '2014',
    countryCode: 'NL',
     },
  headers: 
   { Accept: 'application/json',
     'x-api-key': process.env.apikey } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var obj = JSON.parse(body);
  var res=_(obj.setlist).chain().
  pluck('sets').
  flatten().
  pluck('set').
  flatten().
  pluck('song').
  flatten().
  countBy('name').
  value();

var sortedres=_(res).chain().
map(function(cnt,name){
  return{
    title: name,
    count: cnt
  }
})
.sortBy('count')
.value();

console.dir(sortedres.reverse());

  // console.log(res);
//   console.log(body);
});
