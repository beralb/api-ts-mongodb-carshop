import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  mockCarsArray,
  mockMotorcyclesArray,
  mockCar,
  mockMotorcycle,
  mockUpdatedCar,
  mockUpdatedMotorcycle,
} from '../../mocks/TestMocks';
import Icar from '../../../src/Interfaces/ICar';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Car from '../../../src/Domains/Car';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testa a busca de veiculos', function () {
  it('Deveria buscar todas os carros com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves(mockCarsArray);

    const carsArrayOutput = mockCarsArray.map((item) => (
      item
    ));

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(carsArrayOutput);

    sinon.restore();
  });

  it('Deveria buscar todas as motos com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves(mockMotorcyclesArray);

    const motorcyclesArrayOutput = mockMotorcyclesArray.map((item) => (
      item
    ));

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    expect(result).to.be.deep.equal(motorcyclesArrayOutput);

    sinon.restore();
  });

  it('Deveria buscar todas carros pelo seu ID com SUCESSO', async function () {
    // sinon.stub(Model, 'findById').returns({ select: () => ({ lean: () => mockCar }) } as any);
    sinon.stub(Model, 'findOne').resolves(mockCar);
    const service = new CarService();
    const result = await service.getById('63c52df6e4f1c5b7839ed90b');

    expect(result).to.be.deep.equal(mockCar);

    sinon.restore();
  });

  it('Deveria buscar todas motos pelo seu ID com SUCESSO', async function () {
    sinon.stub(Model, 'findOne').resolves(mockMotorcycle);
    const service = new MotorcycleService();
    const result = await service.getById('63c52df6e4f1c5b7839ed90b');

    expect(result).to.be.deep.equal(mockMotorcycle);

    sinon.restore();
  });

  it('Deveria inserir novos carros com SUCESSO', async function () {
    const newCar: Icar = mockCar;
    const searchedCar: Car = new Car(mockCar);

    sinon.stub(Model, 'create').resolves(searchedCar);
    const service = new CarService();
    const result = await service.create(newCar);

    expect(result).to.be.deep.equal(searchedCar);

    sinon.restore();
  });

  it('Deveria inserir novas motos com SUCESSO', async function () {
    const newMotorcycle: IMotorcycle = mockMotorcycle;
    const searchedMotorcycle: Motorcycle = new Motorcycle(mockMotorcycle);

    sinon.stub(Model, 'create').resolves(searchedMotorcycle);
    const service = new MotorcycleService();
    const result = await service.create(newMotorcycle);

    expect(result).to.be.deep.equal(searchedMotorcycle);

    sinon.restore();
  });

  it('Deveria atualizar novos carros com SUCESSO', async function () {
    const carToUpdate: Icar = mockCar;
    const updatedCar: Car = new Car(mockUpdatedCar);

    sinon.stub(Model, 'findOneAndUpdate').resolves(updatedCar);
    const service = new CarService();
    const result = await service.update('63c52df6e4f1c5b7839ed90b', carToUpdate);

    expect(result).to.be.deep.equal(updatedCar);

    sinon.restore();
  });

  it('Deveria atualizar novas motos com SUCESSO', async function () {
    const bikeToUpdate: IMotorcycle = mockMotorcycle;
    const updatedBike: Motorcycle = new Motorcycle(mockUpdatedMotorcycle);

    sinon.stub(Model, 'findOneAndUpdate').resolves(updatedBike);
    const service = new MotorcycleService();
    const result = await service.update('63c53edae4f1c5b7839ed914', bikeToUpdate);

    expect(result).to.be.deep.equal(updatedBike);

    sinon.restore();
  });
});