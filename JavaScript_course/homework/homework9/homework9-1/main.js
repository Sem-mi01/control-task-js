// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

    let parentDiv = document.createElement('div');

    parentDiv.classList.add('wrappen');

    let childClasses = ['wrap', 'collapse', 'alpha', 'beta'];
    childClasses.forEach((className, index) => {
    let childDiv = document.createElement('div');
    childDiv.classList.add(className);
    childDiv.innerText = 'lorem ipsun';

    parentDiv.appendChild(childDiv);
});
    document.body.appendChild(parentDiv);

    let cloneNode = parentDiv.cloneNode(true);

    document.body.append(cloneNode);
