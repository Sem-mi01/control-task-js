// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).


let userDay: string | null = prompt();
if (userDay !==null) {
    let Day: number = +userDay;

    switch (Day) {
        case 1:
            console.log('Monday');
            console.log('go to work');
            break;
        case 2:
            console.log('Tuesday');
            console.log('go to work');
            break;
        case 3:
            console.log('Wednesday');
            console.log('go to work');
            break;
        case 4:
            console.log('Thursday');
            console.log('go to work');
            break;
        case 5:
            console.log('Friday');
            console.log('go to work');
            break;
        case 6:
            console.log('Saturday');
            console.log('weekend');
            break;
        case 7:
            console.log('Sunday');
            console.log('weekend');
            break;
        default:
            console.log('??????');
    }
}


