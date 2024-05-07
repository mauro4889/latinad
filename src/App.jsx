import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { AppRoutes } from './routes/AppRoutes'
import ProtectedRoute from './utils/ProtectedRoute'
import './App.scss'
import { NotFound } from './components/NotFound'



function App() {
  const url = './src/assets/bk-latinad-main.png'

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
      <span className='imgSpanContainer'><img src='https://latinad.com/static/media/bk-latinad-main.ee48d2d9.png' alt="Fondo de imagen" /></span>
    </div>
  )
}

export default App
