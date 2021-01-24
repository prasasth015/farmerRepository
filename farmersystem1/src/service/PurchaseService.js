import axios from 'axios';

const PURCHASE_API_BASE_URL = "http://localhost:8082/api/v1/purchaseHist";

class PurchaseService {

    getPurchase(){
        console.log("view purchase")
        return axios.get(PURCHASE_API_BASE_URL);
    }

    findPurchaseById(pId){
        return axios.get(PURCHASE_API_BASE_URL + '/' + pId);
    }
}

export default new PurchaseService()