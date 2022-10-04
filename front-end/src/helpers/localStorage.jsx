export function saveStorageUser(user) {
  console.log(user);
  localStorage.setItem('user', JSON.stringify(user));
}

export function getStorageUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function clearStorageUser() {
  localStorage.removeItem('user');
  console.log('saiu');
}
