const users =[
    {
        email:"123@gmail.com",
        password:"password"
    }
]


export const getUserByEmail = email =>{
    const found = users.find(user => user.email === email);
    return found
}