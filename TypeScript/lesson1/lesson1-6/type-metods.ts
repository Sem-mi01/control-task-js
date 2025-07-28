type UserType = {
    name: string;
    age: number;
    status: boolean;
    greeting:(str:string) => string
}

    let users: UserType [] = [
    {greeting:(str:string) => 'hello1', name: 'vasya', age: 31, status: false},
    {greeting:(str:string) => 'hello2', name: 'petya', age: 30, status: true}
    ]
console.log(users);
