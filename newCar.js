import { OldCar } from "./oldCar.js";

export class NewCar extends OldCar {
  constructor(manufacturer, age, model, color, size, soundSystem) {
    super(manufacturer, age, model, color, size);
    this.soundSystem = soundSystem;
  }
  printSpecs() {
    console.log(`Specifications:`);
    console.log(`Manufacturer: ${this.getManufacturer()}`);
    console.log(`Age: ${this.age}`);
    console.log(`Model: ${this.model}`);
    console.log(`Color: ${this.color}`);
    console.log(`Doors: ${this.size}`);
    console.log(`Sound System: ${this.soundSystem}`);
  }
}
