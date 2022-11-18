import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { addCarInput, addCarOutput } from '../../../src/utils/Mocks';

describe('Testa o cadastro de novos carros', () => {
  it('Adiciona um novo carro com sucesso', async () => {
    
    sinon.stub(Model, 'create').resolves(addCarOutput);

    const service = new CarService();
    const result =  await service.addCar(addCarInput);

    expect(result).to.be.deep.equal(addCarOutput);
  })
})