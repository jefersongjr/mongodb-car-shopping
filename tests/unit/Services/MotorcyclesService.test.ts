import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyleService from '../../../src/Services/MotorcycleService';
import { 
  motorcycleInput, 
  motorcycleOutput, 
  motoUpdateInput, 
  updateMotorcycleOutput,
} from '../../../src/utils/Mocks';

describe('Testa a Service da rota "/motorcycles"', function () {
  const invalidId = 'Invalid mongo id';
  it('testa a rota post que adiciona umama nova moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcyleService();
    const result = await service.addMotorcycle(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Testa a rota get que lista todas as motos', async function () {    
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);

    const service = new MotorcyleService();
    const result = await service.getMotorcycles();

    expect(result).to.be.deep.equal([motorcycleOutput]);
  });

  it('Testa a a mensagem quando o id não esta no formato certo', async function () {    
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);
    try {
      const service = new MotorcyleService();
      await service.getOnemotorcyclesArrayById('634852326b35b59438fb');
    } catch (error) {
      expect((error as Error).message).to.be.equal(invalidId);
    }
  });
  
  it('Testa a a mensagem quando o id da moto não existe', async function () {    
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);
    try {
      const service = new MotorcyleService();
      await service.getOnemotorcyclesArrayById('634852326b35b59438fbea31');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

   it('Testa se não é possivel atualizar uma moto que não existe ', async function () {    
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    const service = new MotorcyleService();
    try {
      await service.updateMotorcycles('634852326b35b59438fbea31', motorcycleInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }  
  });

  it('Testa se não é possivel atualizar um carro com id errado', async function () {    
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    const service = new MotorcyleService();
    try {
      await service.updateMotorcycles('634852326b35b59438fbea', motorcycleInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(invalidId);
    }  
  });

  it('Testa se  é possivel atualizar uma moto pelo id ', async function () {    
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateMotorcycleOutput);
    const service = new MotorcyleService();
    try {
      const result = await service.updateMotorcycles('6348513f34c397abcad040b2', motoUpdateInput);
      expect(result).not.to.be.deep.equal(motorcycleOutput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(invalidId);
    }  
  });

  afterEach(function () {
    sinon.restore();
  });
});