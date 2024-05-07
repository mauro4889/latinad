import axios from 'axios';

const login = async (data) => {
    try {
        const response = await axios.post('https://challenge-front-7fw1.onrender.com/login', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default login;
