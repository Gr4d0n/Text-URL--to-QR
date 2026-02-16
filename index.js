import inquirer from "inquirer";
import qr_image, { image } from "qr-image";
import fs from "fs";


const data = await inquirer.prompt([{
    type: "input",
    name: "url",
    message: "Kindly provide the URL : "
}]);

fs.writeFile("c:2.4 QR Code Project/URL_qr_text.txt", data.url, (err)=>{if (err) throw err; console.log("The file has been saved!!");});

var qr_png = qr_image.image(`${data.url}`, {type: 'png'});

qr_png.pipe(fs.createWriteStream("2.4 QR Code Project/URL_qr.png"));