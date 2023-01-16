import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { mockCar, mockCarsArray, mockMotorcyclesArray } from '../../mocks/TestMocks';

describe('Testa a busca de carros', function () {
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

  // it('Deveria buscar todas carros pelo seu ID com SUCESSO', async function () {
  //   sinon.stub(Model, 'findById').resolves(mockCar);

  //   const searchedCar = mockCar;
  //   // console.log('🚀 ~ file: vehicles.test.ts:13 ~ searchedCar', searchedCar);
  //   const service = new CarService();
  //   // console.log('🚀 ~ file: vehicles.test.ts:45 ~ service', service);
  //   const result = await service.getById('63c52df6e4f1c5b7839ed90b');

  //   expect(result).to.be.equal(searchedCar);

  //   sinon.restore();
  // });

  it('Deveria buscar todas carros pelo seu ID com SUCESSO', async function () {
    const carModel = new CarODM();
    sinon.stub(carModel, 'findById').resolves(mockCar);

    const searchedCar = mockCar;
    // console.log('🚀 ~ file: vehicles.test.ts:13 ~ searchedCar', searchedCar);
    const service = new CarService();
    // console.log('🚀 ~ file: vehicles.test.ts:45 ~ service', service);
    const result = await service.getById('63c52df6e4f1c5b7839ed90b');

    expect(result).to.be.equal(searchedCar);

    sinon.restore();
  });
});