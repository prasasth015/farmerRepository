
import axios from 'axios';

//const API_BASE_URL = "http://localhost:8082/api/v1";

class AdminLoginService {

    login(adminUserName,adminPassword){
        return axios.get("http://localhost:8082/api/v1/adminlogin" +'/'+adminUserName+"/"+adminPassword);
    }

    register(admin){
        return axios.post("http://localhost:8082/api/v1/admin",admin);
    }
   

   
}

export default new  AdminLoginService()