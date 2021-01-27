import axios from 'axios';

const SOLD_PRODUCT_API_BASE_URL = "http://localhost:8082/api/v1/soldproduct";
const QUOTE_API_BASE_URL = "http://localhost:8082/api/v1/addQuote";

class SoldProductService {

   

    insertSoldProduct(quoteId){
        return axios.post(SOLD_PRODUCT_API_BASE_URL, quoteId);
    }

    getSoldProductById(invoiceId){
        return axios.get(SOLD_PRODUCT_API_BASE_URL + '/' + invoiceId);
    }

    
    getAllSoldProduct(){
        return axios.get(SOLD_PRODUCT_API_BASE_URL);
    }
   
    getAllQuote(){
        return axios.get(QUOTE_API_BASE_URL);
    }


    deleteSoldProductById(invoiceId){
        return axios.delete(SOLD_PRODUCT_API_BASE_URL + '/' + invoiceId);
    }
}

export default new SoldProductService()