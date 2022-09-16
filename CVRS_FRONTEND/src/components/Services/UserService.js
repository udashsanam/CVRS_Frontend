import axios from "axios";
 const API_URL = "http://192.168.1.170:8080/"
 
class UserClass{
    
    getUserDetail(){
        return axios.get(API_URL + "")
    }
}

export default new UserClass();