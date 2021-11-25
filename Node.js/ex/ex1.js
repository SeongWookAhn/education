const heropy = {
    name: 'HEROPY',
    age: 85,
    getName: function () {
        return this.name
    }
};

const hisName = heropy.getName();
console.log(hisName);

console.log(heropy.getName());