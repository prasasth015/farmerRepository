import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8082/api/v1";

class ProductService {

    getAllProduct(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createEmployee(addproduct){
        return axios.post(PRODUCT_API_BASE_URL, addproduct);
    }

    getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId);
    }

    

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId);
    }
}

export default new ProductService()