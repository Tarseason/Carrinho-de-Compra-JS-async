require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Test se é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('Teste se a função é chamada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(`https://api.mercadolibre.com/sites/MLB/search?q=${consulta}`)
  });
  it('Testa se retorna erro quando falha conexao', async () => {
    const armazena = await fetchProducts()
    expect(armazena).toEqual(new Error('You must provide an url'));
  })
});
