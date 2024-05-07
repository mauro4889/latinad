import axios from "axios"

export const createProduct = async (data, token) => {
    try {
        const response = await fetch(`https://challenge-front-7fw1.onrender.com/display`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        return response.json()
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getProducts = async (size, token) => {
    try {
        const response = await fetch(`https://challenge-front-7fw1.onrender.com/display?pageSize=${size}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.json()
    } catch (error) {
        console.log(error)
        return error
    }
}

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
        const response = await fetch(`https://challenge-front-7fw1.onrender.com/display/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        return response.json()
    } catch (error) {
        console.log(error)
        return error
    }
}

export const deleteProducts = async (id, token) => {
    try {
        console.log(id, token)
        const response = await fetch(`https://challenge-front-7fw1.onrender.com/display/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.json()
    } catch (error) {
        console.log(error)
        return error
    }
}
