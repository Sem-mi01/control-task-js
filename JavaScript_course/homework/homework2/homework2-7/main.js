// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).

let time = 58;
if (time >= 0 && time <= 15) {
    console.log('1 quarter');
}else if (time >= 16 && time <= 30) {
    console.log('2 quarters');
}else if (time >= 31 && time <= 45) {
    console.log('3 quarters');
}else if (time >= 46 && time <= 60) {
    console.log('4 quarters');
}
