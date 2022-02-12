export async function getCategories() {
  const END_POINT = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categoriesResponse = await fetch(END_POINT);
  const responseJson = await categoriesResponse.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const END_POINT = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const productsQuery = await fetch(END_POINT);
  const productResponse = await productsQuery.json();
  return productResponse;
}

export async function fetchItem(productId) {
  if (!productId) {
    return new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
}
