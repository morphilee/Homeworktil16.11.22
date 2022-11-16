export class OldCar {
  #manufacturer;
  constructor(manufacturer, age, model, color, size) {
    this.#manufacturer = manufacturer;
    this.age = age;
    this.model = model;
    this.color = color;
    this.size = size;
  }
  printSpecs() {
    console.log(`Specifications:`);
    console.log(`Manufacturer: ${this.#manufacturer}`);
    console.log(`Age: ${this.age}`);
    console.log(`Model: ${this.model}`);
    console.log(`Color: ${this.color}`);
    console.log(`Doors: ${this.size}`);
  }
  getManufacturer() {
    return this.#manufacturer;
  }
}
