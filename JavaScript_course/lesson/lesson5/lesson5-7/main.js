// let a = '';
// let a = ''; // SyntaxError

// console.log(a); // ReferenceError звернення до неіснуючої змінної

// let user = {};
// user.xxx (); // TypeError відсутність методу

// console.log(a);
// console.log('start');
// try{
//     console.log(a);
// }catch(e){
//     console.error(e);
// }finally {
//     console.log('finaly block');
// }
// console.log('end');

function calc(a, b){
    // return a / b;   // буде помилка
    // try {
    //
    // } catch (e){
    //
    // }
    if (b === 0) {
        throw new Error('b is 0');
    }
    return a / b;
}
calc(10, 0);


