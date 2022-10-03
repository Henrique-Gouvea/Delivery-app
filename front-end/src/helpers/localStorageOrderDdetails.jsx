export function saveStorageOrder(order) {
  localStorage.setItem('orderDetails', JSON.stringify(order));
}

export function getStorageOrder() {
  return JSON.parse(localStorage.getItem('orderDetails'));
}

export const addOrdertorage = (product) => {
  const order = getStorageOrder();

  if (order) {
    saveStorageOrder([...order, product]);
  } else saveStorageOrder([product]);
};
