const fs = require('fs');
var readData = [];
let object="";
let contentToWrite = ""; 

function convertToJSON(sourceFileName, destinationFileName, callback) {
    fs.readFile(sourceFileName, 'utf8', (err, data) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log(data);
            callback(data); 
            fs.readFile(destinationFileName, 'utf8', (err, data) => {
                if (err) {
                    console.error(err.message);
                }
                else {
                    console.log(data);
                }
            });
        }  
    });
}

convertToJSON("users.csv","JSON.txt" , (data)=>{
    readData = data.split('\n');
    let metaData = readData[0].split(", ");// GET THE METADATA LINE

    for (let i = 1; i < readData.length; i++) {
        let personData = [];
        var index = 0;
        personData = readData[i].split(", ");

        object += "{ \n"
        personData.map((element,key)=>{
           object += metaData[key]+":"+element+",\n"; 
        });
        object += "}\n";
        contentToWrite += object;  
        object = ""; 
    }

        fs.appendFile('JSON.txt', "[" + contentToWrite + "]", (err) => {
            if (err) {
                console.error(err);
            }
        });
    }); 




