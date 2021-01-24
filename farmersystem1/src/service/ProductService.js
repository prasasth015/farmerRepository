import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8082/api/v1/addproduct";

class ProductService {

    getAllProduct(){
        return axios.get("http://localhost:8061/api/v1/addproduct");
    }

   

    insertProduct(product){
        return axios.post("http://localhost:8082/api/v1/addproduct", product);
    }

    deleteProduct(productId){
        return axios.delete("http://localhost:8082/api/v1/addproduct" + '/' + productId);
    }
}

export default new ProductService()