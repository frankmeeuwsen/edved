const _=require('underscore');
var testobj=
[{
    "sets":{
        "set":[
            {
                "song":[
                    {
                        "name": "Tuolomne"
                    },
                    {
                        "name": "Tuolomne1"
                    },
                    {
                        "name": "Tuolomne2"
                    },
                    {
                        "name": "Tuolomne3"
                    },
                ]
            },
            {
                "encore":1,
                "song":[
                    {
                        "name": "Tuolomne-encore"
                    },
                    {
                        "name": "Tuolomne-encore1"
                    },
                    {
                        "name": "Tuolomne-encore2"
                    },
                    {
                        "name": "Tuolomne-encore3"
                    },
                ]
            }

        ]
    }
},
{
    "sets":{
        "set":[
            {
                "song":[
                    {
                        "name": "Tuolomne"
                    },
                    {
                        "name": "Tuolomne1a"
                    },
                    {
                        "name": "Tuolomne2a"
                    },
                    {
                        "name": "Tuolomne3a"
                    },
                ]
            }
        ]
    }
}]
var obj = require("./data/amstotal.json");

var res=_(obj).chain().
    pluck('sets').
    pluck('set').
    flatten().
    pluck('song').
    flatten().
    countBy('name').
    value();

    console.log(res);
