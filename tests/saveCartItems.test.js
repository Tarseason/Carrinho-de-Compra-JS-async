const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');


localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa execução da função com o parametro cartItem', () => {
    expect(saveCartItems(localStorage.getItem)).toHaveBeenCalled();
  })
  it('Testa dois parametros ', () => {
    expect(saveCartItems(localStorage.getItem, 'elemento')).toHaveBeenCalled();
  })
});
