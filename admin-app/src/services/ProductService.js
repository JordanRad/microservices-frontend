import axios from 'axios';

const URL = 'http://localhost:8080/product-service/api/products/';
// const token = JSON.parse(sessionStorage.getItem("user")).token;
class ProductService {
    
    getAllProducts() {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.get(URL+"getAll",config);
    }
    getProductById(id) {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.get(URL+`${id}`,config);
    }
    createUser(user) {
        return axios.post(URL, user);
    }
    updateUser(id, user) {
        return axios.put(URL + `/${id}`, user);
    }

    deleteProduct(id){
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.delete(URL+`${id}`,config);
    }

}
export default new ProductService();