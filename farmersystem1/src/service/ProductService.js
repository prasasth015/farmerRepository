import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8082/api/v1/addproduct";
const API_BASE_URL = "http://localhost:8082/api/v1/complaint";  

class ProductService {

    getAllProduct(){
        return axios.get("http://localhost:8082/api/v1/addproduct");
    }

    getAllComplaint(){
        return axios.get(API_BASE_URL);
    }

    insertProduct(product){
        return axios.post("http://localhost:8082/api/v1/addproduct", product);
    }

    deleteProduct(productId){
        return axios.delete("http://localhost:8082/api/v1/addproduct" + '/' + productId);
    }
}



export default new ProductService()