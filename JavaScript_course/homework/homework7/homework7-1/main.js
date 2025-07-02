// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id,name, surname , email, phone ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'Roman', 'Ivanenko', 'Ivanenko@gmail.com', '5674531'),
    new User(2,  'Katerina',  'Pruhodko', 'Pruhodko@gmail.com',  '5674532'),
    new User(3,  'Polina',  'Gnatenko',  'Gnatenko@gmail.com',  '5674533'),
    new User(4,  'Olersandr',  'Petrenko',  'Petrenko@gmail.com', '5674534'),
    new User(5,  'Volodumur', 'Kovalenko',  'Kovalenko@gmail.com', '5674535'),
    new User(6,  'Anna',  'Mukutenko',  'Mukutenko@gmail.com',  '5674536'),
    new User(7,  'Dmutro',  'Avramenko', 'Avramenko@gmail.com',  '5674537'),
    new User(8,  'Oksana',  'Kostenko',  'Kostenko@gmail.com',  '5674538'),
    new User(9,  'Svitlana',  'Stepanenko',  'Stepanenko@gmail.com', '5674539'),
    new User(10,  'Bogdan', 'Magdenko', 'Magdenko@gmail.com',  '56745310'),
    ]
console.log(users);

