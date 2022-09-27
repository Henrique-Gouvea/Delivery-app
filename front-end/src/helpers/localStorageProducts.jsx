export function saveStorageProducts(products) {
  console.log(products);
  localStorage.setItem('products', JSON.stringify(products));
}

export function getStorageProducts() {
  return JSON.parse(localStorage.getItem('products'));
}

export const addProductStorage = (product) => {
  const productsCart = getStorageProducts();

  if (productsCart) {
    const productsFiltered = productsCart.filter((prod) => product.id !== prod.id);
    saveStorageProducts([...productsFiltered, product]);
  } else saveStorageProducts([product]);
};
