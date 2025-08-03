

// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

type TempType = [number, number, number][];
let temperature: TempType = [
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

interface ITemps {
    day: string,
    morning: number,
    afternoon: number,
    evening: number,
}

let temps: ITemps[] = [
    {day: 'Monday', morning: 18, afternoon: 24, evening: 14},
    {day: 'Tuesday', morning: 20, afternoon: 26, evening: 15},
    {day: 'Wednesday', morning: 15, afternoon: 20, evening: 12},
    {day: 'Thursday', morning: 17, afternoon: 22, evening: 13},
    {day: 'Friday', morning: 16, afternoon: 23, evening: 17},
    {day: 'Saturday', morning: 18, afternoon: 24, evening: 15},
    {day: 'Sunday', morning: 24, afternoon: 30, evening: 18}
];

console.log(temps[1].afternoon);


class Degrees {
    morning: number;
    afternoon: number;
    evening: number;

    constructor(morning: number, afternoon: number, evening: number) {
        this.morning = morning;
        this.afternoon = afternoon;
        this.evening = evening;
    }
}

let degreesTemp: [string, Degrees] [] = [
    ['Monday', new Degrees (18,24, 14)],
    ['Tuesday',new Degrees (20, 26, 15)],
    ['Wednesday', new Degrees (15, 20, 12)],
    ['Thursday', new Degrees (17, 22, 13)],
    ['Friday', new Degrees (16, 23, 17)],
    ['Saturday', new Degrees (18, 24, 15)],
    ['Sunday', new Degrees (24, 30, 18)]
];
console.log(degreesTemp[0][1].afternoon);
