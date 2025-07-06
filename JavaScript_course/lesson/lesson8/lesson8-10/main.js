let user = {
    firstName: 'Taras',
    lastName: 'Shevchenko',
}
user.firstName = 'Andriy';

console.log(user);
for (const userKey in user) {  // можна проітерувати;
    console.log(userKey);
}

// можна зробити характеристику незмінною (заборонити змінювати), можна щоб характеристика не приймала участь в переліку можна задавати значення по іншому:

Object.defineProperty(
    user,
    'id', {
        value: 100500,    // зміна значення
        writable: false, // заборона змінювати
        enumerable: true, // id. якщо поставити false, то не виведе (не приймає участь в переліку)
        configurable: false
        // Якщо configurable має значення true, властивість можна видалити і її атрибути можна змінювати. Якщо ж configurable має значення false, властивість не можна ні видалити, ні змінити її атрибути, за винятком випадку, коли writable також false.

    }
)
console.log(user);
user.id = 100;
    console.log(user);
for (const userKey in user) {
    console.log(userKey);
}
Object.defineProperty(
    user,
    'id', {
        value: 200600,
        writable: false,
        enumerable: true,
        configurable: false
    }
);
console.log(user); // TypeError:
