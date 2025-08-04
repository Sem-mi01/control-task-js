// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function(callback){
    for (let i = 0; i < this.length + 1; i++){
        callback(this[i], i, this);
    }
}

const names = ['Anna', 'Vasya', 'Petya', 'Masha', 'Olga', 'Alina'];

names.myForEach((name, index) => {
    console.log(`${name} - ${index}`);
});

Array.prototype.myFilter = function(callback){
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i,  this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}

const filteredNames = names.myFilter(function(name){
    return name.startsWith('A');
});
console.log(filteredNames);