const repeatString = function(text, number) {
    let repeatedString = "";
    if(number < 0){
        return "ERROR";
    }
    for(let x = 0; x < number; x++){
        repeatedString += text;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
