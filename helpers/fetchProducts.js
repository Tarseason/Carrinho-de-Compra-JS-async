const fetchProducts = async (consulta) => {
  if (!consulta) return new Error('You must provide an url');
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${consulta}`);
  const want = url.json();
  return want;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
