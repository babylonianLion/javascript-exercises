const sumAll = function(start, end) {
    let sum = 0;
    if(start > end){
        start = start + end;
        end = start - end;
        start = start - end;
    }
    if(start < 0 || end < 0 || Number.isInteger(start) == false || Number.isInteger(end) == false){
        return "ERROR";
    }
    for (let x = start; x <= end; x++){
        sum += x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
