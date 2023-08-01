class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
        console.log(this.wheels);
        console.log(this.color);
	}
}
class Bicycle extends Vehicle {
  constructor() {
    super('blue', 2, 'honk honk');
  }
}


const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

const myWheel = new Bicycle();
myWheel.honkHorn(); //2
const myColor = new Bicycle();
myColor.honkHorn(); //2