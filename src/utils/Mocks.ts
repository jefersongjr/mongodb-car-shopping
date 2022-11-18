import Car from "../Domains/Car";
import ICar from "../Interfaces/ICar";

export const addCarInput: ICar = {
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5

}

export const addCarOutput: Car = new Car({
  "id": "634852326b35b59438fbea2f",
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.99,
  "doorsQty": 4,
  "seatsQty": 5,
  }
);
  