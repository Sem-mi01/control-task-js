
function foo() {
    console.log('foo');
    // foo();
}

foo();

function iterator(arr, i) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) {
        iterator(arr, i);
    }

}

iterator([11, 22, 33], 0);

let arr = [11, 22, 33, [44, 55], [66, 77, [111, 222]]]; // [11,22,33,44,55]

let innerArray = [];

function flatter(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            flatter(item);
        } else {
            innerArray.push(item);
        }
    }
}

flatter(arr);

console.log(innerArray);
