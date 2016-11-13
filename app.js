console.log("Testing Nodemon");

// Modules
var fs = require("fs");
var billboard = require('billboard-top-100');
var xl = require('excel4node');

// Create a new instance of a Workbook class 
var wb = new xl.Workbook();

// Add Worksheets to the workbook 
var ws = wb.addWorksheet('Billboard');

// Create a reusable style 
var style = wb.createStyle({
    font: {
        color: '#000000',
        size: 12
    },
    numberFormat: '#,##0; (#,##0); -'
});

for (var i = 0; i < 50; i++) {

	ws.cell(i+1,1).number(i+1).style(style);

}

ws.cell(1+1,2).string('My simple string').style(style);

	// Billboard methods
	
	// console.log(songs); //prints array of top 100 songs for week of August 27, 2016
    // console.log(songs[3]); //prints song with rank: 4 for week of August 27, 2016
    // console.log(songs[0].title); //prints title of top song for week of August 27, 2016
    // console.log(songs[0].artist); //prints artist of top songs for week of August 27, 2016
    // console.log(songs[0].rank) //prints rank of top song (1) for week of August 27, 2016

var numberOfSongs = 50;

billboard(function(songs){

	for (var i = 0; i < numberOfSongs; i++) {

		//ws.cell(i+1,1).string(songs[i].artist);

		fs.appendFile('list.txt', i+1 + ") " + songs[i].artist + " - " + songs[i].title + "\n");

	}

});

wb.write('billboard.xlsx');