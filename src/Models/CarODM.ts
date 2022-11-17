import {
    Model,
    model,
    models,
    Schema,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
    private schema: Schema;
    private model: Model<ICar>;

    constructor() {
        this.schema = new Schema<ICar>({
            model: { type: String, required: true },
            year: { type: Number, required: true },
            color: { type: String, required: true },
            status: { type: Boolean, required: true },
            buyValue: { type: Number, required: true },
            doorsQty: { type: Number, required: true },
            seatsQty: { type: Number, required: true },
        });
        
        this.model = models.cars || model('cars', this.schema);
    }

    public async create( car: ICar): Promise<ICar> {
        return this.model.create({ ...car })
    }
}

export default CarODM;