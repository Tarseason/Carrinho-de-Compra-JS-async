const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa execução da função com o parametro cartItem', () => {
    expect(getSavedCartItems.getItem(localStorage.getItem)).toHaveBeenCalled();
  });
  it('Testa dois parametros ', () => {
    expect(getSavedCartItems(localStorage.getItem, 'elemento')).toHaveBeenCalled();
  });
});
