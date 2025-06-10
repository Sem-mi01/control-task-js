// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temperature = [
    [18, 24, 14],
    [20, 26, 15],
    [15, 20, 12],
    [17, 22, 13],
    [16, 23, 17],
    [18, 24, 15],
    [24, 30, 18]
];
console.log(temperature);
console.log(temperature [6]);

let temps = [
    {day: 'Monday', morning: 18, afternoon: 24, evening: 14},
    {day: 'Tuesday', morning: 20, afternoon: 26, evening: 15},
    {day: 'Wednesday', morning: 15, afternoon: 20, evening: 12},
    {day: 'Thursday', morning: 17, afternoon: 22, evening: 13},
    {day: 'Friday', morning: 16, afternoon: 23, evening: 17},
    {day: 'Saturday', morning: 18, afternoon: 24, evening: 15},
    {day: 'Sunday', morning: 24, afternoon: 30, evening: 18}
];

console.log(temps[1].afternoon);

let degreesTemp = [
    ['Monday', {morning: 18, afternoon: 24, evening: 14}],
    ['Tuesday', {morning:20, afternoon: 26, evening: 15}],
    ['Wednesday', {morning: 15, afternoon: 20, evening: 12}],
    ['Thursday', {morning: 17, afternoon: 22, evening: 13}],
    ['Friday', {morning: 16, afternoon: 23, evening: 17}],
    ['Saturday', {morning: 18, afternoon: 24, evening: 15}],
    ['Sunday', {morning: 24, afternoon: 30, evening: 18}]
];
console.log(degreesTemp[0][1].afternoon);
