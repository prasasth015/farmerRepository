import axios from 'axios';

const API_BASE_URL = "http://localhost:8082/api/v1/complaint";

class ComplaintService {

    saveComplaint(complaint){
        console.log(complaint);

        return axios.post(API_BASE_URL ,complaint);
    }

    viewComplaint(complaintId){
        return axios.get(API_BASE_URL+'/'+complaintId);
    }
    

    deleteComplaint(complaintId){
        return axios.delete(API_BASE_URL + '/' + complaintId);
    }
    getAllComplaint(){
        return axios.get(API_BASE_URL);
    }
   

   
}

export default new  ComplaintService()