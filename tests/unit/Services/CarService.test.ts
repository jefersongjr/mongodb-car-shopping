import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { 
  addCarInput, 
  addCarOutput, 
  allCarsArray, 
  carOutput, 
  updatedCarInput, 
  updatedCarOutput,
} from '../../../src/utils/Mocks';

describe('Testa a Service da rota "/cars"', function () {
  const invalidId = 'Invalid mongo id';
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
      expect((error as Error).message).to.be.equal(invalidId);
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

  it('Testa se não é possivel atualizar um carro que não existe ', async function () {    
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    const service = new CarService();
    try {
      await service.updateCars('634852326b35b59438fbea31', addCarInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }  
  });

  it('Testa se não é possivel atualizar um carro com id errado', async function () {    
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    const service = new CarService();
    try {
      await service.updateCars('634852326b35b59438fbea', addCarInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(invalidId);
    }  
  });

  it('Testa se  é possivel atualizar um carro pelo id ', async function () {    
    sinon.stub(Model, 'find').resolves(allCarsArray);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCarOutput);
    const service = new CarService();
    try {
      await service.updateCars('634852326b35b59438fbea2f', updatedCarInput);
      expect(updatedCarOutput).not.to.be.deep.equal(allCarsArray[0]);
    } catch (error) {
      expect((error as Error).message).to.be.equal(invalidId);
    }  
  });

  afterEach(function () {
    sinon.restore();
  });
});
