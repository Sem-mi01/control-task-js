// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

function usersArray(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

usersArray([
    {id: 1, name: 'John', age: 15},
    {id: 2, name: 'Julia', age: 25},
    {id: 3, name: 'Silva', age: 32},
    {id: 4, name: 'Slava', age: 40},
    {id: 5, name: 'Maks', age: 50},
]);