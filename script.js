import { NewCar } from "./newCar.js";
import { Cars } from "./cars.js";
import { OldCar } from "./oldCar.js";

let mySubaro = new OldCar("Subaro", "2006", "Impraza", "blue", "5 Doors");
let myKia = new NewCar("Kia", "2013", "ceed", "gold", "5 Doors", "Sony");

let allMyCars = new Cars();
allMyCars.addCar(mySubaro);
allMyCars.addCar(myKia);

console.log(allMyCars.cars);

allMyCars.printAllMyCars();
