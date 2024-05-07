import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { AppRoutes } from './routes/AppRoutes'
import ProtectedRoute from './utils/ProtectedRoute'
import './App.scss'



function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={
            <ProtectedRoute>
              <AppRoutes />
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
      <span className='imgSpanContainer'><img src="./src/assets/bk-latinad-main.png" alt="Fondo de imagen"/></span>
    </div>
  )
}

export default App
