import Car from '../Domains/Car';

import ICar from '../Interfaces/ICar';

import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    if (!car) throw new Error('Invalid Request!');
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.find();
    const carsArray = cars.map((car) =>
      this.createCarDomain(car));
    return carsArray;
  }

  public async getById(id: string) {
    // console.log('🚀 ~ file: CarService.ts:31 ~ CarService ~ getById ~ id', id);
    const carODM = new CarODM();
    const foundCar = await carODM
      .findById(id);
    console.log("🚀 ~ file: CarService.ts:35 ~ CarService ~ getById ~ foundCar", foundCar)
    return foundCar;
  }
}

export default CarService;