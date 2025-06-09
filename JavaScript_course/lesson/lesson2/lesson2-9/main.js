let color = prompt('enter color');

// switch (color) {
//     case 'green':
//         console.log('go!');
//         // break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('???????');
// }
// в середині кейсу можна прописувати все
// break це своєрідний блок case

switch (color) {
    case 'green':
    case 'yellow':
        console.log('go!');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('???????');
}