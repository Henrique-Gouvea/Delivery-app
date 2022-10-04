export function saveStorageProducts(products) {
  localStorage.setItem('products', JSON.stringify(products));
}

export function getStorageProducts() {
  return JSON.parse(localStorage.getItem('products'));
}

export const addProductStorage = (product) => {
  const productsCart = getStorageProducts();

  if (productsCart) {
    const productsFiltered = productsCart.filter((prod) => product.id !== prod.id);
    if (Number(product.quantity) === 0) {
      saveStorageProducts([...productsFiltered]);
    } else saveStorageProducts([...productsFiltered, product]);
  } else saveStorageProducts([product]);
};

export function saveCartTotal(total) {
  localStorage.setItem('cartTotal', JSON.stringify(total));
}

export function getCartTotal() {
  const productsCart = getStorageProducts();
  let total = 0;
  console.log(productsCart);
  if (productsCart) {
    productsCart.forEach((product) => {
      total = (product.price * product.quantity) + total;
    });
  }
  return total.toFixed(2);
}

export function removeProducts() {
  localStorage.removeItem('products');
}
