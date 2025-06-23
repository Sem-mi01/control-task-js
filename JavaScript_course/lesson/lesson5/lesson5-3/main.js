let asd = {
    name: "Vasya",
    age: 31,
    greeting: function (msg) {
        console.log(this);
        return `${msg} my name is ${this.name}`;

    },
    vitanny: (msg) => `${msg} my age is ${this.age}`
}

console.log(asd.greeting(`hi!`));
console.log(asd.vitanny(`hello`)); // hello my age is undefined

// this це обєкт з яким працюємо на даний час в контексті з яким працюємо. тут this = asd. якщо замінити на user, наприклад, то нічого не зміниться

// стрілочні функції втрачають контекст this оскільки посилаються на window