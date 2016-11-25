console.log("Testing Nodemon");

// Modules
const fs = require("fs");
const billboard = require('billboard-top-100');

var songCount = process.argv[2];

billboard(function(songs){

	for (var i = 0; i < 50; i++) {

		var strSongs = JSON.stringify(songs);

		fs.writeFileSync('list.json', strSongs);

	}

});

var listString = fs.readFileSync('list.json'); // reads .json file into a variable

var list = JSON.parse(listString); // takes JSON string & convert back to Javascript

console.log(list[0].rank);