import axios from "axios";
export async function productsData(){
    const products = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush")
    return products;
} 
