import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { mockCarsArray, mockMotorcyclesArray } from '../../mocks/TestMocks';

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
});