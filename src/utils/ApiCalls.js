import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:8000' });

const Api = {

    getTemplates() {
        return http.get(`/templates`);
    }
}
export default Api;