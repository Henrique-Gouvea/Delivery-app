export function saveStorageUser(user) {
  console.log(`localstorage${user}`);
  localStorage.setItem('user', JSON.stringify(user));
}

export function getStorageUser() {
  return JSON.parse(localStorage.getItem('user'));
}
