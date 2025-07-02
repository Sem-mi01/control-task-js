// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

import users from '../homework7-1/main.js';


// const filterUsers = users.filter((user) => user.id % 2 === 0);
// console.log(filterUsers);

users.filter(function(user) {
    return user.id % 2 === 0;
});