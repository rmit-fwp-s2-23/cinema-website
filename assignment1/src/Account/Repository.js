const USER_KEY = "user";

function createUser(username, user, joinedDate) {
  user.date = joinedDate;
  localStorage.setItem(username, JSON.stringify(user));
}

function verifyUser(username, password) {
  if (localStorage.getItem(username) !== null) {
    const user = JSON.parse(localStorage.getItem(username));
    if (username === user.username && password === user.password) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      return true;
    }
  }
  return false;
}

function getUser() {
  const data = localStorage.getItem(USER_KEY);
  return JSON.parse(data);
}

function setUser(data) {
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  createUser(data.username, data, data.date);
  deleteUser(user.username);
  localStorage.setItem(USER_KEY, JSON.stringify(data));
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}
function deleteUser(username) {
  localStorage.removeItem(username);
}
export { verifyUser, getUser, createUser, setUser, removeUser, deleteUser };
