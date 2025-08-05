// #jeBqHV525U5
//
// – Є масив
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.
let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];

for (const courses of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerHTML = `${courses.title}` + `-` + `${courses.monthDuration}`;
    document.body.appendChild(div);
}
