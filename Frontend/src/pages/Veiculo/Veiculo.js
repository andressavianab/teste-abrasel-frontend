export class Vehicle { 
    constructor(model, yearManufacture, numberDoors, brand) {
        this.model = model;
        this.yearManufacture = yearManufacture;
        this.numberDoors = numberDoors;
        this.brand = brand
    }
}

export class Car extends Vehicle {
    constructor(model, yearManufacture, numberDoors, brand) {
        super(model, yearManufacture, numberDoors, brand);

        if(numberDoors < 2 || numberDoors > 4) {
            throw new Error("Quantidade de prtas inválida para um carro!");
        }
    }
}

export class Motorcycle extends Vehicle {
    constructor(model, yearManufacture, brand) {
        super(model, yearManufacture, 2, brand);
        this.wheels = 2;
        this.passengers = 1;
    }
}