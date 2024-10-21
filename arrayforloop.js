let car = ["benz", "toyota", "audi", "mazda", "nissan", "honda", "kkkk"];
for (let index = 3; index < car.length; index++) {
    const element = car[index];
    console.log(element); 
}

let person = {
    nam:"bola",
    address: "satelite town",
    age: 49,
    dept: "nursing",
    fullname:function(){
        return this.nam + " "+ this.age;
    }

}
//console.log(person.);
for (const key in person) {
    if (person.hasOwnProperty.call(person, key)) {
        // const element = person[key];

        console.log(`person properties : ${key} : ${person[key]}`)
        
    }


}

let a =10;
    // while (a<10) {
    //     console.log(a++)
        
    // }
    do {
        console.log(a++)
    } while (a<15);
   
    console.log(person.fullname());