class Factory{
    constructor(location, owner,vehicles){  
            this.location = location
            this.owner = owner
            this.vehicles = []
    }
    createVehicle(vehicle){
        
        this.vehicles.push(vehicle);
    }
    
    
    listVehicles(){
        
        return this.vehicles
        
    
     }

     paintVehicle(vin, paintColor){
        this.vehicles.find(obj => obj.vin === vin).color = paintColor;
     }

}

const newFactoryBuilding=   new Factory("geremy", "elonMusk")
newFactoryBuilding.createVehicle(new Vehicle("Ford", "F-150",2018, 19823,"123123"))
newFactoryBuilding.paintVehicle("123123", "green")
newFactoryBuilding.createVehicle(new Vehicle("Chevy", "Silverado",2019, 11234,"98081"))
newFactoryBuilding.paintVehicle("98081", "red")
newFactoryBuilding.listVehicles()

// const newCar = new Vehicle("Ford", "F-150", 2015, 19000, "1234")















// - create a `Factory` class in the factory.js file that adheres to the provided class diagram
// - when the `.createVehicle(vehicle)` is called with a valid vehicle it creates a vehicle in the factory
// - when the `.listVehicles()` is called it returns all vehicles in factory
// - when `.paintVehicle(vin, paintColor)` it paints the matching vehicle the specified color

// ## Acceptance criteria
// - The vehicle class passes all tests
// - The vehicle class definition matches the class diagram
// - The factory class passes all tests
// - The factory class definition matches the class diagram
