import { Schema } from 'mongoose';

const motorcycleSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  buyValue: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  engineCapacity: {
    type: Number,
    required: true,
  },
});

export default motorcycleSchema;
