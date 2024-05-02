const login = async (data) => {
    try {
        const response = await fetch(`https://challenge-front-7fw1.onrender.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    } catch (error) {
        console.log(error)
        return error
    }
}

export default login