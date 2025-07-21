
console.log("start");

            fetch('https://jsonplaceholder.typicode.com/users')
                .then((value) => value.json())
                .then((value) => {
                    let btn = document.createElement('button');
                    btn.setAttribute('class', 'btn btn-success');
                    btn.innerText = 'do';
                    document.body.appendChild(btn);
                });

console.log("end");

// let btn= document.getElementsByClassName('btn-success')[0];