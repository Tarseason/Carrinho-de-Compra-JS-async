const saveCartItems = (elemento) => localStorage.setItem('getItem', elemento);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
