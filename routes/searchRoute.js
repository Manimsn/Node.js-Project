const express = require('express');
const userRouter = express.Router();
const lineReader = require('line-reader');

// Router to get pincode based on Phone Number
userRouter.route("/:phoneNumber")
    .get( (req, res) => {
          let storeLine = []
        lineReader.eachLine('./delete.txt', function(line, last) {
        //   console.log(count + ' '+line);
            if(line.includes(req.params.phoneNumber)){
              storeLine = line.split(',');
                if(storeLine[0] == req.params.phoneNumber){
                    console.log('Requested match found  :',storeLine[storeLine.length -1])
                    res.send(`Requested Number is : ${req.params.phoneNumber},
                    and it's pincode is: ${storeLine[storeLine.length -1]}`)
                  // break;
                  return false;
                }
                console.log('came')         
            }
            // count++;
            // console.log('not in list',count,storeLine)
            if(last){
              // or check if it's the last one
              // console.log('last Line reached No records found');
              res.send(`it's the last one
              No match found`);
            }
        })
      })
 
// Router to get User details based on any string(Exception address) in each line
userRouter.route("/anyStringSearch/:anyString")
  .get((req, res) => {
      let anyStirngSearchResult = [] //used to store the matched line
      lineReader.eachLine('./delete.txt', function(line, last) {      
          if(line.toLowerCase().includes(req.params.anyString.toLowerCase())){
              anyStirngSearchResult = line.split(',');
              console.log(anyStirngSearchResult)
              res.send(anyStirngSearchResult)
              return false;
              // console.log('came')    
          }
          if(last){
              // console.log('came')
              res.send(`it's the last one
              No match found`);
          }
      })
  })

module.exports = userRouter