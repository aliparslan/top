//* Q1
// changes dash-separated words into camel case
// e.g. my-short-string --> myShortString
function camelize(str) {
    const string_arr = str.split('-');
    const new_arr = string_arr.map((str) => str[0].toUpperCase() + str.slice(1));
    return new_arr.join('');
}
console.log(camelize('hello-world'));

//* Q2
// filters array with numbers between a and b
// will not mutate arr, makes shallow copy
function filterRange(arr, a, b) {
    return arr.filter((element) => element >= a && element <= b);
}
const arr_ex2 = [1,2,3,4,5]
console.log(filterRange(arr_ex2, 2, 4));

//* EX 3
// same thing but it shouldn't return anything and SHOULD modify the array
function filterRangeInPlace(arr, a, b) {
    const filtered = arr.filter((element) => element >= a && element <= b);
    // can't do arr = filtered bc that reassigns the local arr and doesn't modify the original (???)
    arr.length = 0; // clearing the original
    arr.push(...filtered);
}
const arr_ex3 = [1,2,3,4,5]
filterRangeInPlace(arr_ex3, 2, 4);
console.log(arr_ex3)

//* EX 4
// sort in decreasing order
const sortDecreasing = (arr) => arr.sort().reverse();
console.log(sortDecreasing([1,2,3,4,5]));

//* EX 5
