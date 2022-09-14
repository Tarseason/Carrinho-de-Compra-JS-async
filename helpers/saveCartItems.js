const saveCartItems = (elemento) => localStorage.setItem('setItem', elemento);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
