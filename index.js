
//describing the nature of our function
exports.deepClone = function(obj){
    var newCopy = Object.assign({},obj);
    console.log(newCopy);
    return newCopy;
}

//exporting it so that we can use it in different files
module.exports = exports;