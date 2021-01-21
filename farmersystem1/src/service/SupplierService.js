import axios from 'axios';

const SUPPLIER_API_BASE_URL = "http://localhost:8061/api/v1/createSupplier";

class SupplierService {

    // getSupplier(){
    //     return axios.get(SUPPLIER_API_BASE_URL);
    // }

    createSupplier(supplier){
        return axios.post(SUPPLIER_API_BASE_URL, supplier);
    }

    // getSupplierById(supplierUserName){
    //     return axios.get(SUPPLIER_API_BASE_URL + '/' + supplierUserName);
    // }

}
export default new SupplierService()