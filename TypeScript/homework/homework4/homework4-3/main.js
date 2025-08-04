// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderSquare (h, r) {
        const sideSquare = 2 * Math.PI * r * h;
        const roudSquare = 2 * Math.PI * r * r;
        const result = sideSquare + roudSquare;
        console.log(result);
        return result;
}
    let h = 15
    let r = 10

cylinderSquare (h, r)

