import {
  Model,
  model,
  models,
  Schema,
  UpdateQuery,
} from 'mongoose';
  
abstract class AbstractODM<T> {
  private schema: Schema;
  private model: Model<T>;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
  
  public async find(): Promise<T[]> {
    return this.model.find();
  }
  
  public async findById(id: string): Promise<T[]> {
    return this.model.find({ id });
  }
  
  public async updateById(_id: string, obj: T): Promise<T | null> {  
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}
  
export default AbstractODM;