// import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';
import motorcycleSchema from '../Schemas/motorcycleSchema';

// const motorcycleSchema = new Schema({
//   model: {
//     type: String,
//     required: true,
//   },
//   year: {
//     type: Number,
//     required: true,
//   },
//   color: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   engineCapacity: {
//     type: Number,
//     required: true,
//   },
// });

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    super(motorcycleSchema, 'Motorcycles');
  }
}

export default MotorcycleODM;
