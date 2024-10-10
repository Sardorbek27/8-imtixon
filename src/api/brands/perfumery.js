import axios from "axios";

export async function perfumery(){
    const perfumery = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner")
    return perfumery;
} 