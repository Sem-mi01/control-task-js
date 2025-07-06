// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
function cloner(obj) {
if (obj === null || obj === undefined || obj === NaN) {
    throw new Error('ERROR');
}
let functions = [];
for (const key in obj) {
    if (typeof obj[key] === 'function') {
        const functionClone = obj[key].bind({});
        functions.push({key, fn: functionClone});
    }
}
const cloneObj = JSON.parse(JSON.stringify(obj));
for (const {key, fn} of functions) {
    cloneObj[key] = fn;
}
return cloneObj;
}


const clone = cloner({id: 123, name: 'asdsad', greeting() {console.log('hello')}, foo() {console.log('bar')}});
clone.greeting();
clone.foo();
// cloner(null);
cloner(undefined);
// cloner(NaN);
