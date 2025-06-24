// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let total = 0;
    for (const item of arr) {
        total = total + item;
    }
    return total
}
console.log(sum([1, 2, 10]));