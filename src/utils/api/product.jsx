import axios from "axios"

export const createProduct = async (data, token) => {
    try {
        const response = await axios.post(
            'https://challenge-front-7fw1.onrender.com/display',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const getProducts = async (size, token) => {
    try {
        const response = await axios.get(
            `https://challenge-front-7fw1.onrender.com/display?pageSize=${size}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const getProductById = async (id, token) => {
    try {
        const response = await axios.get(`https://challenge-front-7fw1.onrender.com/display/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const updateProduct = async (id, data, token) => {
    try {
        const response = await axios.put(
            `https://challenge-front-7fw1.onrender.com/display/${id}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const deleteProducts = async (id, token) => {
    try {
        const response = await axios.delete(
            `https://challenge-front-7fw1.onrender.com/display/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
