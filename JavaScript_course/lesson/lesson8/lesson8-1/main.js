// let user = undefined;
//
// // user.foo();
// // user.name; // TypeError
// user?.name; // не відображає нічого в console. ?

let user = {
    name: {}
};
user?.name?.fn; // не відображає нічого в console. ?


