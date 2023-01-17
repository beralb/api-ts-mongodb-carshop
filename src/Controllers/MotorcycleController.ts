import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycles() {
    const motorcycle = await this.service.getAllMotorcycles();
    return this.res.status(200).json(motorcycle);
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      if (!Types.ObjectId.isValid(id)) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }
      const foundMotorcycle = await this.service.getById(id);

      if (!foundMotorcycle) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }

      return this.res.status(200).json({ ...foundMotorcycle, id });
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      if (!Types.ObjectId.isValid(id)) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }

      const foundBike = await this.service.getById(id);
      if (!foundBike || foundBike === null) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }

      const updatedBike = await this.service.update(id, this.req.body);
      return this.res.status(200).json(updatedBike);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;