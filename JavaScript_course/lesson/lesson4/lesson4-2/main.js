


function userFactory(id, name, age, status) {

    let user = {
        id: id,
        name: name,
        age: age,
        status: status
    }
    return user;
} // це своєрідний шаблон

let u1 = userFactory(1,'kokos',  123, true);
let u2 = userFactory(2,'abrikos',  45, false);
let u3 = userFactory(3,'tomat',  231,true);
let u4 = userFactory(4,'cucumber', 56, false);
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);