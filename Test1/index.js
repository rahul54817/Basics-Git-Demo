const findSum = (num1, num2) => {
    return num1 + num2;
}

let users = [];
const createUser = (name, email) =>{

    const newUser = {
        name : name,
        email : email
    }
    users = [...users, newUser];

}