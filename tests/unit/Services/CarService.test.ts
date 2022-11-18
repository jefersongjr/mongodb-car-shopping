import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { addCarInput, addCarOutput, carOutput } from '../../../src/utils/Mocks';

describe('Testa a Service da rota "/cars"', function () {
  it('testa a rota post que adiciona um novo carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(addCarOutput);

    const service = new CarService();
    const result = await service.addCar(addCarInput);

    expect(result).to.be.deep.equal(addCarOutput);
  });

  it('Testa a rota get que lista todos os carros', async function () {    
    sinon.stub(Model, 'find').resolves(carOutput);

    const service = new CarService();
    const result = await service.getCars();

    expect(result).to.be.deep.equal(carOutput);
  });
});
