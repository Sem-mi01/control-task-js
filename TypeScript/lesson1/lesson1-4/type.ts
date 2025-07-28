export{};

let a: number = 123;
let b: boolean = true;
let c: string = "okten";

// function foo (arg1: number, arg2: number): void{
//     return arg1 + arg2;   // TS2322: Type 'number' is not assignable to type 'void', оскільки number та number буде number а не void
// }
// foo('asd', '1asdf'); // TS2345: Argument of type 'string' is not assignable to parameter of type 'number', оскільки у функції  задано тип number, а не string. приймає тільки числові значення

let arr: number[] = [];
arr.push(1);
// arr.push('2'); // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// можна зробити масив міксованим поставивши замість number any, але це буде каша і працювати з ним буде проблематично