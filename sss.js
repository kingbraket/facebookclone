class Car {
    
    constructor(name, year, school_name, dob) {
        let ff =6;
      this.name = name;
      this.year = year;
      this.school_name=school_name;
      this.dob=dob;
  
    }


age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
    
 
    }
  
  const myCar = new Car("Ford", 2014,"unical", 2024);
  console.log("My car is " + myCar.age() + " years old my school name is " + myCar.school_name);
//   document.getElementById("demo").innerHTML =
//   "My car is " + myCar.age() + " years old.";