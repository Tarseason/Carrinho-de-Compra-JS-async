// Tarcisio
// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener = () => {
    li.remove();
  });
  return li;
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const buttonPurchase = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttonPurchase.addEventListener('click', () => {
    const productId = section.querySelector('.item_id').innerText;
    const product = document.getElementsByClassName('cart__items')[0];
    fetchItem(productId).then((elemento) => {
      product.appendChild(createCartItemElement(elemento));
    });
  });

  section.appendChild(buttonPurchase);
  return section;
};

const captura = async () => {
  const { results } = await fetchProducts('computador');
  const showI = document.querySelector('.items');

  results.forEach((elem) => {
    const spaceProduct = createProductItemElement(elem);
    showI.appendChild(spaceProduct);
  });
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

const getIdFromProductItem = (product) => product.querySelector('span.item.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

// A partir de agora vai começar a ...

// const a = document.getElementsByClassName('cart__items') <= isso pega a section que fica o carrinho de compra.
// const c = document.getElementsByClassName('item') <= isso pega o produto. 
// criar uma função que quando clicado no c[?] o a recebe seu id, sua descrição sua imagem. 
window.onload = () => {
  captura();
 };
