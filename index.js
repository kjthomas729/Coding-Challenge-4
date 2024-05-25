// Car class implementation
class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} slowing down to ${this.speed} km/h`);
    }
  }
  
  // EV class implementation
  class EV extends Car {
    constructor(make, speed, charge) {
      super(make, speed);
      this.charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.charge = chargeTo;
      console.log(`${this.make} battery charged to ${this.charge}%`);
    }
  
    accelerate() {
      this.speed += 20;
      this.charge -= 1;
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
  }
  
  // Test data
  const tesla = new EV('Tesla', 120, 23);
  
  // Test the accelerate method
  tesla.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
  tesla.accelerate(); // Tesla going at 160 km/h, with a charge of 21%
  
  // Test the brake method
  tesla.brake(); // Tesla slowing down to 155 km/h
  tesla.brake(); // Tesla slowing down to 150 km/h
  
  // Test the chargeBattery method
  tesla.chargeBattery(90); // Tesla battery charged to 90%
  tesla.accelerate(); // Tesla going at 170 km/h, with a charge of 89%
  
  // Further tests
  tesla.brake(); // Tesla slowing down to 165 km/h
  tesla.chargeBattery(50); // Tesla battery charged to 50%
  tesla.accelerate(); // Tesla going at 185 km/h, with a charge of 49%