export{};

// export interface  {
//   name: string;
//   age: number;
//   status: boolean;
// }  // згенеровано в Json2ts

type UserType = {
    name: string;
    age: number;
    status: boolean;
    // asd: boolean;
    // zxc: string;
    asd?: string;
}
// let users: {name: string; age: number; status: boolean;} []
    let users: UserType [] = [
    {name: 'vasya', age: 31, status: false, asd:'123'},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
