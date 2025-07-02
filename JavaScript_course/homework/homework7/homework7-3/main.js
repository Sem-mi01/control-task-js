// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

import users from '../homework7-1/main.js';


users.sort((id1, id2) => {
    return id1.id - id2.id;
});
console.log(users);


