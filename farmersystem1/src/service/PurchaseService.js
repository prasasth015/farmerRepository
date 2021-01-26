import axios from 'axios';

const PURCHASE_API_BASE_URL = "http://localhost:8082/api/v1/purchaseHist";
const SOLD_PRODUCT_API_BASE_URL = "http://localhost:8082/api/v1/soldproduct";
const QUOTE_API_BASE_URL = "http://localhost:8082/api/v1/addQuote";


class PurchaseService {

    getPurchase(){
        console.log("view purchase")
        return axios.get(PURCHASE_API_BASE_URL);
    }

    findPurchaseById(pId){
        return axios.get(PURCHASE_API_BASE_URL + '/' + pId);
    }

    getSoldProductById(invoiceId){
        return axios.get(SOLD_PRODUCT_API_BASE_URL + '/' + invoiceId);
    }

   
    getAllQuote(){
        return axios.get(QUOTE_API_BASE_URL);

    }

    getAllSold(){
        return axios.get(SOLD_PRODUCT_API_BASE_URL);
    }




}

export default new PurchaseService()