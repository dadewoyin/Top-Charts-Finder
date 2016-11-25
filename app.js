console.log("Running Billboard App");

// Modules
const fs = require("fs");
const billboard = require('billboard-top-100');
const xl = require('excel4node');

var songCount = process.argv[2];

billboard(function(songs){

	for (var i = 0; i < 50; i++) {

		var strSongs = JSON.stringify(songs);

		fs.writeFileSync('list.json', strSongs);

	}

});

var listString = fs.readFileSync('list.json'); // reads .json file into a variable

var list = JSON.parse(listString); // takes JSON string & convert back to Javascript

console.log(list[0].artist);

											// Excel Code

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

ws.cell(1+1,2).string('My simple string').style(style);

for (var i = 0; i < 50; i++) {

	ws.cell(i+1, 1).number(list[i].rank).style(style); // rank

	ws.cell(i+1, 2).string(list[i].artist).style(style); // artist name

	ws.cell(i+1, 3).string(list[i].title).style(style); // song title

}

wb.write('billboard.xlsx');