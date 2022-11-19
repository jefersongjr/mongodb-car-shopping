import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req : Request;
  private res : Response;
  private next: NextFunction;
  private service: CarService;

  constructor(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createNewCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
        
    try {
      const newCar = await this.service.addCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCar() {
    try {
      const allCar = await this.service.getCars();
      return this.res.status(200).json(allCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.getOneCarsById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarById() {
    const { id } = this.req.params;
    const car : ICar = { 
        model: this.req.body.model,  
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        doorsQty: this.req.body.doorsQty,
        seatsQty: this.req.body.seatsQty,  
     };
    try {
      const { id } = this.req.params;
      const updateCar = await this.service.updateCars(id, car);
      console.log(...updateCar);
      
      return this.res.status(200).json(...updateCar);
    } catch (error) {
      this.next(error);
    }
  }
} 

export default CarController;