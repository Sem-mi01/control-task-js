// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

function minNumber(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
            if (number < min) {
                min = number;
            }
    }
    return min;
}

console.log(minNumber([ 5, 12, -35, 98, -60]));