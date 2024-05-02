import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { AppRoutes } from './routes/AppRoutes'
import ProtectedRoute from './utils/ProtectedRoute'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={
          <ProtectedRoute>
            <AppRoutes />
          </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
