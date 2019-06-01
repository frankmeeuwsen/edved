const _=require('underscore');
var obj = require("./data/amstotal.json");
// console.log(obj[1].sets.set[0].song[2].name);

// obj.forEach(function(element) {
//     console.log('=======================');
//     console.log(element.sets.set[0].song[0].name);
//   });

  
for(var i =0;i<obj.length;i++){
        // console.log(_.each(obj[i].sets.set[0].song[0], function(data) { return data.name;}));
        console.log(_.countBy(obj[i].sets.set[0].song, function(data) { return data.name;}));
}
