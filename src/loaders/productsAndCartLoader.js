import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json();

    let savedCart = getShoppingCart();
    let cartProducts = [];
    for (const id in savedCart) {
        const cartitem = products.find(product => id === product.id);
        if (cartitem) {
            let quantity = savedCart[id];
            cartitem.quantity = quantity;
            cartProducts.push(cartitem)
        }
    }
    console.log(cartProducts);
    return { products, cartProducts };
}