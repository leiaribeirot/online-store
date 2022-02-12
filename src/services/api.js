const baseURL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const response = await fetch(`${baseURL}/categories`);

  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${baseURL}/search?category=${categoryId}&q=${query}`);

  return response.json();
}

// Na criação da API é uma boa prática pegar a base e tirar apenas ou tudo o que se precisa
// Endpoint: https://api.mercadolibre.com/sites/MLB/categories
// Se eu pego a BASE inteira, só pego o que for pedido no requisito - caterogias
// USANDO FETCH https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
// FECTH - Acessar e manipular partes do pipeline HTTP.
// FECTH - Fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona
