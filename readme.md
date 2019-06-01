# Setlist-Unique-Count-Aggregator

## Get setlist information

This was just a small excercise for me to scratch my own itch. I needed an idea how many unique songs Eddie Vedder performed during his 2017 shows in Amsterdam. With the API from Setlist.fm I could get the basic information for setlists, but nothing aggregated or sorted. So I made something myself.

Now you can do too. This script does one thing, get aggregated info on setlists. Nothing fancy, just a small list with songs and a count.

## How does it work

1. Clone/fork the repo
2. Do `npm install`
3. Get your [Setlist API key](https://www.setlist.fm/settings/apps)
4. Edit the sample.env file and rename/copy it to .env
5. In get.js edit the appropriate options. See the [API docs](https://api.setlist.fm/docs/1.0/index.html#resources) for all the possibilities
6. Run get.js and have fun.

## Warranties

I can't promise anything. I know this works with setlists, I have no idea if it will work out of the box with other API settings. Just try, learn and share.
