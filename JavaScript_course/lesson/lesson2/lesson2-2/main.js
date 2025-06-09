let arr = [
    [11, 22, 33],  // 0 індекс
    [],  // 1 індекс
    []   // 2 індекс
]
console.log(arr); // (3) [Array(0), Array(0), Array(0)]
console.log(arr[0]); // (3) [11, 22, 33]

let innerArray = arr[0];
console.log(innerArray); // (3) [11, 22, 33]
console.log(innerArray[1]); // 22
// або коротше
console.log(arr[0][1]); // 22, де [0] це індекс основного масиву, а [1] - це індекс внутрішнього масиву



