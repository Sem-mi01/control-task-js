// асоціація

// let map = new Map();
// console.log(map);
// map.set(1, 'one');
// map.set(2, 'two');
// map.set(3, 'three');
// console.log(map);
//
// console.log(map.get(1));

let map = new Map();
console.log(map);
let likar = {id: 'likar'};
let petya = {id: 'petya'};

map.set(likar, {name: 'roma', surname: 'oganov'});
map.set(petya, {name: 'oleksandr', surname: 'petrov'});
map.set(petya, {name: 'asdqwe', surname: 'qweqwe'});
console.log(map);

console.log(map.get(likar));

// map.delete(likar);
// console.log(map);
// map.clear()
console.log(map.size);
console.log(map.keys());

let from = Array.from(map.keys());
console.log(from);

console.log(map.values());
console.log(Array.from(map.values()));