
export default function urlCanculate (catagory) {
    switch(catagory){
        case "electronics":
            return "https://fakestoreapi.com/products/category/";
        case "books":
            return "http://localhost:3000/api/";
        default:
            return "https://fakestoreapi.com/products/category/";
    }
}