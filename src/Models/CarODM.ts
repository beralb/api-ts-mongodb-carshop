import AbstractODM from './AbstractODM';
import ICar from '../Interfaces/ICar';
import carSchema from '../Schemas/carSchema';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    super(carSchema, 'Cars');
  }
}

export default CarODM;
