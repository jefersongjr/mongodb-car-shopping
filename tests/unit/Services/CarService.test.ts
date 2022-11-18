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
  
  it('Testa a a mensagem quando o id não esta no formato certo', async function () {    
    sinon.stub(Model, 'find').resolves(carOutput);
    try {
      const service = new CarService();
      await service.getOneCarsById('634852326b35b59438fb');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  
  it('Testa a a mensagem quando o id do carro não existe', async function () {    
    sinon.stub(Model, 'find').resolves(carOutput);
    try {
      const service = new CarService();
      await service.getOneCarsById('634852326b35b59438fbea31');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });
    
  it('Testa a rota get "car/:id" lista um carro por id', async function () {    
    sinon.stub(Model, 'find').resolves(carOutput);
    const service = new CarService();
    const resultado = await service.getOneCarsById('634852326b35b59438fbea2f');
    expect(resultado).to.be.deep.equal(carOutput[0]);   
  });

  afterEach(function () {
    sinon.restore();
  });
});
