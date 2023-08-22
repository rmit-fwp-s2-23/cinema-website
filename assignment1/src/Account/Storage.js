const USERS_KEY = "users";
const USER_KEY = "user";


function initUser() {
  if(localStorage.getItem(USERS_KEY) !== null){
    return;
  }
  const users = [
    {
      username: "Quang",
      password: "quang123"
    },
    {
      username: "Pengkim",
      password: "pengkim123"
    }
  ];
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getUsers(){
  const data = localStorage.getItem(USERS_KEY);
  return JSON.parse(data);
}

function verifyUser(username, password) {
  const users = getUsers();
  const data = {username, password}
  for (const user of users) {
    if (username === user.username && password === user.password) {
      localStorage.setItem(USER_KEY, JSON.stringify(data));
      return true;
    }
  }
  return false;
}

function getUser(){
  const data = localStorage.getItem(USER_KEY);
  return JSON.parse(data);
}

export { initUser, verifyUser, getUser };
