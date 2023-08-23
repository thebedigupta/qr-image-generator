import inquirer from "inquirer";
import qr from "qr-image";
// import fs from "fs";


// inquirer
//   .prompt([
//     {
//         message:"Type in your Link",
//         name:"URL",
//     },
//   ])
//   .then((answers) => {
//     const url = answers.URL;
//     var qr_svg = qr.image(url);
//     qr_svg.pipe(fs.createWriteStream("qr_img.png"));

//     fs.writeFile("URL.txt", url, (err) => {
//       if (err) throw err;
//       console.log("The file has been saved!");
//     });
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)