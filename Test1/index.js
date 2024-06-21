const findSum = (num1, num2) => {
    return num1 + num2;
}

let products = [];

const addProduct = (name, price) =>{
    const newProduct = {
        product_name : name,
        product_price : price
    }
    products = [...products, newProduct]
}