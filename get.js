var request = require("request");
const _=require('underscore');
const env = require('dotenv').config();

var options = { method: 'GET',
  url: 'https://api.setlist.fm/rest/1.0/search/setlists',
  qs: 
   {  artistName: 'Eddie Vedder',
      cityName: 'Amsterdam',
      year: '2017',
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
  map(function(count,name){
    return{
      title: name,
      count: count
    }
  }).
  sortBy('count').
  value();

console.dir(res.reverse());
console.dir(res.length+" unique songs in the setlists");

});
