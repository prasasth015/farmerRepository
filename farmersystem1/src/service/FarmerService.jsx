
import axios from 'axios';

//const API_BASE_URL = "http://localhost:8082/api/v1";

class FarmerService {

    login(farmerUserName,farmerPassword){
        return axios.get("http://localhost:8082/api/v1/farmerlogin" +'/'+farmerUserName+"/"+farmerPassword);
    }

    register(farmer){
        return axios.post("http://localhost:8082/api/v1/farmer",farmer);
    }
    getFarmerById(farmerUserName)
    {
        return axios.get("http://localhost:8082/api/v1/getfarmerbyid"+"/"+farmerUserName);
    }

   
}

export default new  FarmerService()