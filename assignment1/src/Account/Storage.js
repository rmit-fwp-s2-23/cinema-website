function initUser(){
    const users =[
        {
            username: "Quang",
            password: "quang123"
        },
        {
            username: "Pengkim",
            password: "pengkim123"
        }
    ]
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function verifyUser(username, password){
    for(const user of users){
        if(username === user.username && password === user.password){
            return true;
        }
        return false;
    }
}

export {initUser, verifyUser}