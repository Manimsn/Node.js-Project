const express = require('express')
const Router = express.Router();
const fs = require('fs');

Router.get('/:no', (req, res) => {
    // console.log(req.params.no)
    
    fs.readFile('./delete.txt', 'utf8' , (err, data) => {
        var counting = []
        if(err){
            console.log('Error',err)
        }else{
            
            let array = data.toString().split("\n");
          
                for(i in array) {
                    var extractedPin = array[i].toString().split(',');
                   
                    if(extractedPin[0] == `${req.params.no}`){
                        // console.log( 'Extracted: ',extractedPin[extractedPin.length - 1])
                        // console.log( 'Mobile Number: ',extractedPin[0])
                        // console.log( 'Name: ',extractedPin[1])
                        counting.push(true)
                        res.send(extractedPin[extractedPin.length-1])
                       
                    }
                    counting.push(false);
                    }
               
            // console.log(extractedObject)
            // console.log(array)
        }
        if(counting.indexOf(true) == -1){
            res.send('No Record found')
        }
        console.log(counting)
    });
})

Router.get('/search/:anyString', (req, res) => {
    // console.log(req.params.no)
    
    fs.readFile('./delete.txt', 'utf8' , (err, data) => {
        var counting = []
        if(err){
            console.log('Error',err)
        }else{
            let array = data.toString().split("\n");
          
                for(i in array) {
                    var extractedPin = array[i].toString().split(',');
                   
                    if(extractedPin.includes(req.params.anyString)){
                        // console.log( 'Extracted: ',extractedPin[extractedPin.length - 1])
                        // console.log( 'Mobile Number: ',extractedPin[0])
                        // console.log( 'Name: ',extractedPin[1])
                        counting.push(true)
                        res.send(extractedPin)
                       
                    }
                    counting.push(false);
                    }
               
            // console.log(extractedObject)
            // console.log(array)
        }
        if(counting.indexOf(true) == -1){
            res.send('No Record found')
        }
        console.log(counting)
    });
})
module.exports = Router