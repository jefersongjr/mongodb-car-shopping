import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyleService from '../../../src/Services/MotorcycleService';
import { motorcycleInput, motorcycleOutput } from '../../../src/utils/Mocks';

describe('Testa a Service da rota "/motorcycles"', function () {
  it('testa a rota post que adiciona umama nova moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcyleService();
    const result = await service.addMotorcycle(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});