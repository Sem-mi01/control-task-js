

// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача

interface IUser {
    name: string
    username: string
    password: string
}

let Users: IUser[] = [
    {name: 'Anna', username: 'Annet-01', password: '12345678'},
    {name: 'Vasya', username: 'Vasya-24', password: 'hd456789F'},
    {name: 'Olya', username: 'Olya-76', password: '87654321'},
    {name: 'Ivan', username: 'Vano-43', password: 'Hgfqwe76'},
    {name: 'Masha', username: 'Mary-23', password: 'Khgrs875*'},
    {name: 'Katya', username: 'Katrin-87', password: '876Hjfdsr'},
    {name: 'Dasha', username: 'Darina', password: 'khg_hgf65'},
    {name: 'Denis', username: 'Den-567', password: 'kljhfgeousf'},
    {name: 'Pavlo', username: 'Pasha32', password: 'lKh98786509'},
    {name: 'Lena', username: 'lenok', password: 'ljohuigj98'}
]
console.log(Users[0]);
console.log(Users[1]);
console.log(Users[2]);
console.log(Users[3]);
console.log(Users[4]);
console.log(Users[5]);
console.log(Users[6]);
console.log(Users[7]);
console.log(Users[8]);
console.log(Users[9]);
