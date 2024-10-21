let car= 20;
let newWord=car.toString();
console.log(newWord);
console.log(typeof car);
console.log(typeof newWord);


var Car = ['Benz', 'Toyota', 'Mazda', 'Bmw'];
let brand = ['volvo', 'LEXUS', 'HONDA'];
var p = Car.pop();
var d = Car.push('Range');
var e = Car.splice(1,2);
var r = Car.concat(brand);
var g = "friday";


console.log(d);
console.log(e);
console.log(r);
console.log(Car);


var Cars = {
    name: 'Camry',
    brand: 'Toyota',
    Color: 'red',
    modelYear:2020,
    series: ['camry sport', 'camry spider', 'camry LE'],
    New: function(){
        return `The new name is:${this.Color} and the brand is: ${this.brand}`;
    }
}
function few(){
    let a= 5;
    let b=4;
    return a*b;
}

console.log(Cars);
console.log(Cars.name);
console.log(Cars.series[1]);
console.log(Cars.New());
console.log(g[2]);
console.log(few(4,5));
