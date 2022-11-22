import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req : Request;
  private res : Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createNewMotorcycle() {
    const motorcycle: IMotorcycle = {
      id: this.req.body.model,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
        
    try {
      const newMotorcycle = await this.service.addMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycle() {
    try {
      const allMotorcycle = await this.service.getMotorcycles();
      return this.res.status(200).json(allMotorcycle);
    } catch (error) {
      this.next(error);
    }
  } 

  public async getById() {
    try {
      const { id } = this.req.params;
      const motorcycles = await this.service.getOnemotorcyclesArrayById(id);
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }
} 

export default MotorcycleController;