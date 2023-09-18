class Vehicle {
    constructor(make,model,year,price,vin,color){  
        this.make = make
        this.model= model
        this.year= year
        this.price= price
        this.vin =  vin
        this.color= undefined
    }
    paint(col){
        this.color= col
        
    }
    drive(){
    return this.year+" "+ this.make+" "+ this.model+" "+ "drives"
    // "2015 Jord J-051 drives"  

    }

}

// .paint("blue")
// const newCar= new Vehicle("Ford", "F-150", 2015, 19000, "1234")
const newCar = new Vehicle("Jord", "J-051", 2015, 50000, "12312")
newCar.paint("blue")
newCar.drive()


//- when the `.drive()` method is called on a vehicle `new Vehicle("Ford", "F-150", 2015, 19000, "1234")` it should print out this `2015 Ford F-150 drives`
//- create a `Factory` class in the factory.js file that adheres to the provided class diagram
// - when the `.createVehicle(vehicle)` is called with a valid vehicle it creates a vehicle in the factory
// - when the `.listVehicles()` is called it returns all vehicles in factory
// - when `.paintVehicle(vin, paintColor)` it paints the matching vehicle the specified color

// ## Acceptance criteria
// - The vehicle class passes all tests
// - The vehicle class definition matches the class diagram
// - The factory class passes all tests
// - The factory class definition matches the class diagram

