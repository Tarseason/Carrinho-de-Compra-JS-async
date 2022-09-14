// Tarcisio
// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

const producti = document.getElementsByClassName('cart__items')[0];

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
    saveCartItems(producti.innerHTML);
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
    fetchItem(productId).then((elemento) => {
      producti.appendChild(createCartItemElement(elemento));
      saveCartItems(producti.innerHTML);
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

const clearButton = document.getElementsByClassName('empty-cart')[0];
clearButton.addEventListener('click', () => {
  producti.innerHTML = '';
  localStorage.clear();
});

// Referencia Local Storage
/*
https://josiaspereira.com.br/como-usar-localstorage-no-reactjs/#:~:text=Para%20salvar%20alguma%20informa%C3%A7%C3%A3o%20no,uma%20chave%20e%20um%20valor.
*/

const recoveryEvent = () => {
  const listCart = document.querySelectorAll('.cart__item');
  listCart.forEach((elemento) => {
    elemento.addEventListener('click', () => {
      elemento.remove();
      saveCartItems(producti.innerHTML);
    });
  });
};

window.onload = async () => {
  await captura();
  if (localStorage.getItem('getItem')) {
    producti.innerHTML = localStorage.getItem('getItem');
  }
  recoveryEvent();
};
