var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log('Hello is ' + num);
};
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 12));
addAndHandle(1, 312, function (result) {
    console.log(result);
});
