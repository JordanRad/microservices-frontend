import axios from 'axios';

const URL = 'https://jordan-proxy-gateway.herokuapp.com/order-service/api/orders/';
// const token = JSON.parse(sessionStorage.getItem("user")).token;
class OrderService {
    
    getAllNewOrders() {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.get(URL+"getAllNew",config);
    }

    getAllNewAndProcessingOrders() {
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.get(URL+"getAllNewAndProcessing",config);
    }
    

    setOrderToProcessing(orderNumber){
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.put(URL+`${orderNumber}?status=PROCESSING`,"",config);
    }
    cancelOrder(orderNumber){
        let user = JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")):null;
        console.log(user.token)
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        return axios.put(URL+`${orderNumber}?status=CANCELED`,"",config)
    }

}
export default new OrderService();