// #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts'];

let navMenu = document.createElement('ul');
navMenu.classList.add('navMenu');

for (const item of arr) {
    const li = document.createElement('li');
    li.innerHTML = item;
    navMenu.appendChild(li);

}

document.body.appendChild(navMenu);