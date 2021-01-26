import axios from 'axios';

const SUPPLIER_API_BASE_URL = "http://localhost:8082/api/v1/createSupplier";

class SupplierService {

    createSupplier(supplier){
        return axios.post(SUPPLIER_API_BASE_URL, supplier);
    }

    supplierLogin(supplierUserName,password){
        return axios.get(SUPPLIER_API_BASE_URL, +'/'+supplierUserName+"/"+password);
    }
    getAllSupplier(){
        return axios.post(SUPPLIER_API_BASE_URL);

    }
}
export default new SupplierService()