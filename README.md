# Top-Charts-Finder
Finds the top songs on the Billboard Top 100 and list them into a spreadsheet. Inspired by my internship with MTV Networks, where I was tasked with getting the top songs weekly. Figured I'd make everyone's lives easier including mine :)

Install needed dependencies using npm.

```
npm install
```

Run app.js to run the app.


```
node app.js
```

The app will pull the top 50 songs from the most recent Saturday and store them into a billboard.xlsx file.

## Built With

* [fs](https://nodejs.org/api/fs.html) - File System
* [excel4node](https://www.npmjs.com/package/excel4node) - Write to excel file
* [billboard-top-100](https://www.npmjs.com/package/billboard-top-100) - Pull billboard songs

