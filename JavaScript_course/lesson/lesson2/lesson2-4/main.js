let user1 = {
    id: 1,
    name: "Vasya",
    age: 31,
    skills: ['html', 'js', 'java'],
    wife: {
        name: "Olya",
        age: 28
    }
}

console.log(user1);
console.log(user1.id); // 1
console.log(user1['age']); // звернення до назви ключа. обов'язково через string

console.log(user1.skills); // (3) ['html', 'js', 'java']
console.log(user1.skills[2]); // java

console.log(user1.wife); // {name: 'Olya', age: 28}
console.log(user1.wife.name); // Olya
