const reverseString = function(text) {
    let reverseText = "";
    for(let x = text.length; x >= 0; x--){
        reverseText += text.charAt(x);
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
