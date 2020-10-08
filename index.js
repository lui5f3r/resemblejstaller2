const express = require('express')
const app = express()
const port = 3000
const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

app.get('/', async(req,res) => {
  
  
  let data = await getDiff();

  res.send("Los % de diferencia para las 3 pruebas son: " + data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//Tomado de https://www.npmjs.com/package/resemblejs 
const getDiff = async() => {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "less"
    };

    var data = "";
 
    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data1 = await compareImages(
        await fs.readFile("./screenshots/punto1.js/prelogin.png"),
        await fs.readFile("./screenshots/punto1.js/poslogin.png"),
        options
    );
    await fs.writeFile("./screenshots/punto1.js/output.png", data1.getBuffer());
    console.log("***********data********* " + data1.misMatchPercentage);
 
    data = "Diferencias prueba1:  " + data1.misMatchPercentage;

    const data2 = await compareImages(
        await fs.readFile("./screenshots/punto2.js/prelogin.png"),
        await fs.readFile("./screenshots/punto2.js/posloginerror.png"),
        options
    );
    await fs.writeFile("./screenshots/punto2.js/output.png", data2.getBuffer());
    console.log("***********data********* " + data2.misMatchPercentage);

    data = data + "% - Diferencias prueba2: " + data2.misMatchPercentage;

    
    const data3 = await compareImages(
        await fs.readFile("./screenshots/punto4.js/prehabito.png"),
        await fs.readFile("./screenshots/punto4.js/poshabito.png"),
        options
    );
    await fs.writeFile("./screenshots/punto4.js/output.png", data3.getBuffer());
    console.log("***********data********* " + data3.misMatchPercentage);

    data = data + "% - Diferencias prueba3: " + data3.misMatchPercentage + "%";

    return data;
}
 
