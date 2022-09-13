const fetchItem = async (consult) => {
  if (!consult) return new Error('You must provide an url');
  const url = await fetch(`https://api.mercadolibre.com/items/${consult}`);
  return url;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
