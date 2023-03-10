import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import ICar from '../Interfaces/ICar';
import IMotorcycles from '../Interfaces/IMotorcycle';

export const addCarInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const addCarOutput: Car = new Car({
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
});

export const updatedCarOutput: Car = new Car({
  id: '634852326b35b59438fbea2f',
  model: 'Fusca',
  year: 2002,
  color: 'Blue',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
});

export const updatedCarInput: ICar = {
  model: 'Fusca',
  year: 2002,
  color: 'Blue',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

export const allCarsArray: ICar[] = [{
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
},
{
  id: '634852326b35b59438fbea31',
  model: 'Tempra',
  year: 1995,
  color: 'Black',
  status: false,
  buyValue: 39,
  doorsQty: 2,
  seatsQty: 5,
},
];

export const carOutput = allCarsArray.map((car) => new Car(car));
const modelo = 'Honda Cb 600f Hornet';
export const motorcycleOutput: Motorcycle = new Motorcycle({
  id: '6348513f34c397abcad040b2',
  model: modelo,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

export const motorcycleInput: IMotorcycles = {
  model: modelo,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const updateMotorcycleOutput: Motorcycle = new Motorcycle({
  id: '6348513f34c397abcad040b2',
  model: modelo,
  year: 2008,
  color: 'Blue',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

export const motoUpdateInput = {
  model: modelo,
  year: 2008,
  color: 'Blue',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};