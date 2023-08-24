const USER_KEY = "user";

function createUser(username, user) {
  localStorage.setItem(username, JSON.stringify(user));
}

function verifyUser(username, password) {
  if (localStorage.getItem(username) !== null) {
    const user = JSON.parse(localStorage.getItem(username));
    const data = { username, password };
    if (username === user.username && password === user.password) {
      localStorage.setItem(USER_KEY, JSON.stringify(data));
      return true;
    }
  }
  return false;
}

function getUser() {
  const data = localStorage.getItem(USER_KEY);
  return JSON.parse(data);
}

function setUser(data){
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  localStorage.setItem(user.username, JSON.stringify(data));
  localStorage.setItem(USER_KEY, JSON.stringify(data));
}

function removeUser(){
  localStorage.removeItem(USER_KEY);
}
export { verifyUser, getUser, createUser, setUser, removeUser };
