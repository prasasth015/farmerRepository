import axios from 'axios';

const QUOTE_API_BASE_URL = "http://localhost:8061/api/v1/addQuote";

class SupplierQuoteService {

    getAllQuote(){
        return axios.get(QUOTE_API_BASE_URL);
    }

    insertQuote(supplierQuote){
        return axios.post(QUOTE_API_BASE_URL, '/'+supplierQuote);
    }

    getQuoteById(quoteId){
        return axios.get(QUOTE_API_BASE_URL + '/' + quoteId);
    }

    updatePrice(supplierQuote, quoteId){
        return axios.put(QUOTE_API_BASE_URL + '/' + quoteId, supplierQuote);
    }

    deleteQuote(quoteId){
        return axios.delete(QUOTE_API_BASE_URL + '/' + quoteId);
    }
}

export default new SupplierQuoteService()