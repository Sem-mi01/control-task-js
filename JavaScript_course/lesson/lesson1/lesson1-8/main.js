// конвертація number в string

console.log(100500); // number
console.log('100500'); // string
console.log(typeof (100500 + '')); // string
console.log (100 + 200 + ''); // 300 string
console.log('' + 100 + 200); // 100200 string


// конвертація string в number
console.log(+'100500'); // number (ставимо +)
console.log(+ '100500asd'); // NaN
console.log(parseInt('100500asd')); // 100500 (asd прибрало)
console.log(parseInt('100500.643')); // 100500 (543 прибрало)
console.log(parseFloat('100500.643')); // 100500.643

// конвертація в boolen
console.log(!!-100);    // true
console.log(!!0);       // false, тому що 0 це нічого
console.log(!!'asd');   // true
console.log(!!'');      // false аналогічно 0
console.log(!!'0');     // true, бо 0 це sprint

// конвертація з boolen
console.log(typeof (true + '')); // true sprint
console.log(+ false);            // false = 0 number
console.log(+ true);             // true = 1 number
console.log(100 - true);         // 99 number

