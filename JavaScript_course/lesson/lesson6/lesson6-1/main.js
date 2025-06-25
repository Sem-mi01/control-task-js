let str = 'hello oKTEN';
console.log(str);      // hello OKTEN
console.log(str[0]);   // h

// let s = str.concat('!!!');
// console.log(s); // hello OKTEN!!!

console.log(str.toUpperCase());   // HELLO OKTEN
console.log(str.toLowerCase());   // hello okten
str.startsWith('hel');             // true, оскільки така секвенція існує і з неї починається стрінга
console.log(str.endsWith('EN'));    // true, оскільки така секвенція існує і нею закінчується стрінга
console.log(str.substring(0, 7));   // hello O
console.log(str.indexOf('l'));       // 2 показує індекс першої такої букви.
console.log(str.lastIndexOf('l'));    // 3 показує індекс останньої такої букви.
console.log(str.indexOf('o', 5));    // 6 показує індекс даного елемента після елемента з 5 індексом
console.log(str.charAt(8));         // T - показує елемент під індексом 8
console.log(str.replace('o', '!')); // hell! oKTEN
console.log(str.replaceAll('o', '!'));  // hell! !KTEN
console.log(str.split(' '));   // (2) ['hello', 'oKTEN'] масив з двома елементами. головну функцію відіграє пробіл ' '




