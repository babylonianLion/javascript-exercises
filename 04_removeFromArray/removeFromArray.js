const removeFromArray = function(array) {
    const fixedArray = [];
    for(item of array){
        for(let x = 1; x < arguments.length; x++){
            if (item === arguments[x]){
                break;
            }
            else if (item != arguments[x] && x == arguments.length -1){
                fixedArray.push(item);
            }
        }
    }
    return fixedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
