
import axios from 'axios';

const API_BASE_URL = "http://localhost:8082/api/v1";


class FarmerService {

    login(farmerUserName,farmerPassword){
        return axios.get(API_BASE_URL +'/farmerlogin/'+farmerUserName+"/"+farmerPassword);
    }

    register(farmer){
        return axios.post(API_BASE_URL +'/farmer/',farmer);
    }
   

   
}

export default new  FarmerService()