import axios from 'axios';

const PURCHASE_API_BASE_URL = "http://localhost:8082/api/v1/purchase";

class PurchaseService {

    getPurchase(){
        console.log("view purchase")
        return axios.get(PURCHASE_API_BASE_URL);
    }

    findPurchaseById(purchaseId){
        return axios.get(PURCHASE_API_BASE_URL + '/' + purchaseId);
    }
}

export default new PurchaseService()