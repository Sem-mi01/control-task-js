// #4WrHwFTEop0
//
// є масив
// за допомогою циклу вивести:
//
//     – користувачів зі статусом true
//
//  – користувачів зі статусом false
//
//  – користувачів, які старші за 30 років

interface IUser1 {
    name: string,
    age: number,
    status: boolean
}

let users1: IUser1[] = [
    {name: `vasya`, age: 31, status: false},
    {name: `petya`, age: 30, status: true},
    {name: `kolya`, age: 29, status: true},
    {name: `olya`, age: 28, status: false},
    {name: `max`, age: 30, status: true},
    {name: `anya`, age: 31, status: false},
    {name: `oleg`, age: 28, status: false},
    {name: `andrey`, age: 29, status: true},
    {name: `masha`, age: 30, status: true},
    {name: `olya`, age: 31, status: false},
    {name: `max`, age: 31, status: true}
]
    
for (let user of users1) {
    if (user.age > 30) {
        console.log(user);
    }
}