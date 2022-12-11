const fs = require('fs');
var readData = [];
var contentToWrite;

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
    for (let i = 1; i < readData.length; i++) {
        let personData = [];
        var index = 0;
        personData = readData[i].split(", ");
        contentToWrite = `{
            username: ${personData[index]} , 
            birthdate: ${personData[index + 1]} , 
            address:  ${personData[index + 2]}, 
            mobile_number:  ${personData[index + 3]}, 
            gender:  ${personData[index + 4]}
        } 
        `;
        fs.appendFile('JSON.txt', "[" + contentToWrite + "]", (err) => {
            if (err) {
                console.error(err);
            }
        });
    }}); 




