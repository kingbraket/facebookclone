// let food=['rice', 'beans', 'yam', 'plantain'];
// let protein=['meat', 'fish', 'snail', 'eggs'];
// var r = food.concat(protein);
// var s = r.splice(2,3);
// console.log(r);
// console.log(s);

var age = 40.45345667;
let name = new Set();

name.add("great");
name.add("ggg");
name.add("eat");
name.add("yyyy");
name.forEach(element => {
    console.log("values created : " + element + ":" + age);
});
var tt = name.has('gre');
console.log(name);
console.log(tt);

const map_name = new Map([
    ["sss",40],
    ['eee',30]
]);

map_name.set('ddd', 100);
var del = map_name.has("eee",200);
map_name.forEach(function(value,key){
    console.log(`ready ${key} : ${value}`);
});
console.log(map_name);
console.log(del);
console.log(typeof map_name);
var dd = age.toExponential(1);
console.log(typeof age);
console.log(dd);

let namee = "\ntoday \n is \n friday";
console.log(namee);