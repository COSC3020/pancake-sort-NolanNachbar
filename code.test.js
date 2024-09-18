const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// const testSort =
//     jsc.forall("array nat", function(arr) {
//         var a1 = JSON.parse(JSON.stringify(arr));
//         var a2 = JSON.parse(JSON.stringify(arr));
//         return JSON.stringify(pancakeSort(a1)) ==
//             JSON.stringify(a2.sort(function(a, b)
//                 { return a - b; }));
//     });
const testSort = jsc.forall("array nat", function(arr) {
    var a1 = JSON.parse(JSON.stringify(arr));
    var a2 = JSON.parse(JSON.stringify(arr));
    const sorted = a2.sort(function(a, b) { return a - b; });
    const result = pancakeSort(a1);
    console.log("Original array:", arr);
    console.log("Sorted array:", sorted);
    console.log("Result:", result);
    return JSON.stringify(result) === JSON.stringify(sorted);
});


jsc.assert(testSort);

// test flip
