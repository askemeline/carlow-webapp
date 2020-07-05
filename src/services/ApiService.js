import axios from 'axios'

class ApiService {
    
    constructor()
    {
        this.endPoint = 'http://127.0.0.1:8000/';
    }

    registerUser(data) {
        console.log(123)
        console.log(data);
        axios.post(this.endPoint + 'api/users', data)
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

}

export default ApiService;