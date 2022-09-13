require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa de é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('Testa se a função tem o retorno desejado', async () => {
    await fetchItem('MLB1615760527');

    expect(fetch).toHavebeenCalledWith(`https://api.mercadolibre.com/items/${consult}`);
  })
  it('Testa se da erro quando parametro nao esperado', async () => {
    const contanteMesmo = await fetchItem();
    expect(contanteMesmo).toEqual(new Error('You must provide an url'))
  })
});
