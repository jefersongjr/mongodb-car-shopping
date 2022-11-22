import IMotorcycle from '../Interfaces/IMotorcycle';
import CategoryTypes from './CategoryType';

class CategoryFactory {
  public static create(moto: IMotorcycle): string {
    if (moto.category === CategoryTypes.Street) {
      return CategoryTypes.Street;
    }
    if (moto.category === CategoryTypes.Custom) {
      return CategoryTypes.Custom;
    }
    if (moto.category === CategoryTypes.Trail) {
      return CategoryTypes.Trail;
    }
    throw new Error('Invalid Key Type!');
  }
}

export default CategoryFactory;