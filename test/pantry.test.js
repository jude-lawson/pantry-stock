import { expect } from 'chai';
import Pantry from '../lib/pantry';

describe('Pantry', () => {
  let pantry;
  beforeEach(() => {
    pantry = new Pantry();
  });

  it('should be an object', () => {
    expect(pantry).to.be.an.instanceof(Pantry)
  })

  describe('Attributes', () => {
    it('should have stock as an empty object by defualt', () => {
      expect(pantry.stock).to.deep.eq({});
    });

    it('should return a number for stockCheck, even if there are zero items', () => {
      expect(pantry.stockCheck('Cheese')).to.eq(0);
    });

    it('should be able to restock an item', () => {
      expect(pantry.stockCheck('Cheese')).to.eq(0);

      pantry.restock('Cheese', 10);

      expect(pantry.stock).to.deep.eq({ "Cheese": 10 });
      expect(pantry.stockCheck('Cheese')).to.eq(10);
    });

    it('should iteratively restock items', () => {
      expect(pantry.stockCheck('Cheese')).to.eq(0);

      pantry.restock('Cheese', 10);

      expect(pantry.stock).to.deep.eq({ "Cheese": 10 });
      expect(pantry.stockCheck('Cheese')).to.eq(10);

      pantry.restock('Cheese', 20);

      expect(pantry.stockCheck('Cheese')).to.eq(30);
    })
  });
});
