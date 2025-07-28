// interface IUser {
//     name: string;
//     age: number;
//     status: boolean;
//     greeting:(str:string) => string
// }
//
// let usersX: IUser [] = [
//     {greeting:(str:string) => 'hello1', name: 'vasya', age: 31, status: false},
//     {greeting:(str:string) => 'hello2', name: 'petya', age: 30, status: true}
// ]

class User {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting(){
        console.log('asd');
    }
}
let user = new User('asd', 123, false)

let usersX: User [] = [
    new User('asd', 123, true)
];
