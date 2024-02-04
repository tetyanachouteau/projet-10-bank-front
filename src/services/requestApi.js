import ProfilModel from "./ProfilModel";
import axios from 'axios';

const API = {
    login: async (user, password) => {
        let response;
        try {
            response = await axios.post('http://localhost:3001/api/v1/user/login', {
                "email": user,
                "password": password
            });

            return response.data.body;
        } catch (error) {
            console.log(error.response);
            return error.response.data.message;
        }
    },

    getUserProfile: async (token) => {
        try {
            // Assuming you have an API endpoint to fetch user profile based on the token
            const response = await axios.post('http://localhost:3001/api/v1/user/profile', {},{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data);
            return new ProfilModel(response.data.body); 
        } catch (error) {
            return null;
        }
    }
};

export default API;