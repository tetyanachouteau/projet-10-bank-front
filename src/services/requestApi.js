import ProfilModel from "./ProfilModel";
import axios from 'axios';

const API = {
    login: async (user, password) => {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                "email": user,
                "password": password
            });

            return response.data.body.token;
        } catch {
            return null;
        }
    },

    getUserProfile: async (token) => {
        try {
            // Assuming you have an API endpoint to fetch user profile based on the token
            const response = await axios.get('http://localhost:3001/user/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return new ProfilModel(response.data); // Assuming the response contains user profile data
        } catch (error) {
            console.error(error);
            throw error; // You might want to handle this error appropriately in your application
        }
    }
};

export default API;