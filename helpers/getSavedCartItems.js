const getSavedCartItems = (elemento) => {
  localStorage.getItem('cartItems', elemento);
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
