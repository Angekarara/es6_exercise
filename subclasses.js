class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
        console.log(this.wheels)
	}
}
class Bicycle extends Vehicle {
  constructor(color = 'blue') {
    super(color, 2, 'honk honk');
  }
}


const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

const myWheel = new Bicycle();
myWheel.honkHorn(); //2