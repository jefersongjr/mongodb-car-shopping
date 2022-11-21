import {
    Model,
    model,
    models,
    Schema,
  } from 'mongoose';
  import IMotorcycle from '../Interfaces/IMotorcycle';
  import ThrowException from '../Middlewares/exceptions/ThrowException';
  
  class MotorcycleODM {
    private schema: Schema;
    private model: Model<IMotorcycle>;
  
    constructor() {
      this.schema = new Schema<IMotorcycle>({
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean, required: false },
        buyValue: { type: Number, required: true },
        category: { type: Number, required: true },
        engineCapacity: { type: Number, required: true },
      }); 
          
      this.model = models.cars || model('cars', this.schema);
    }
  
    public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
      return this.model.create({ ...motorcycle });
    }
  }
  
  export default MotorcycleODM;