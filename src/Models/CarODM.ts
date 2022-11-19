import {
  isValidObjectId,
  Model,
  model,
  models,
  Schema,
  UpdateQuery,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import ThrowException from '../Middlewares/exceptions/ThrowException';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
        
    this.model = models.cars || model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar[]> {
    return this.model.find({ id });
  }

  public async updateCar(_id: string, obj: Object): Promise<ICar | null> {
  if (!isValidObjectId(_id)) throw new ThrowException(422, 'Invalid mongo id');

   return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<ICar>,
    );
  }
}

export default CarODM;