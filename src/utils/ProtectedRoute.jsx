import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) =>{
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    if(token){
        return children
    }else{
        return <Navigate to='/'/>
    }
}

export default ProtectedRoute