
const xlsxToJson = require('xlsx-to-json');

var convert = function(err, result) {
    // error check
        if(err) {
      
      console.log('Error occured', err);
    }
    
    else { 
      console.log('converted');
    }
  };

//Setting up for conversion
var details = {
    
    input: "d:/flighdata_B_segments.xlsx", 
    output: "d:/flighdata_B_segments.json",
    sheet: "flighdata_B_segments"
};

//calling the xlsxToJson() function to generate the Json from excel data.
xlsxToJson(details, convert);
