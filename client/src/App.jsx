import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoutes'
import Leaderboard from './pages/Leaderboard'
import About from './pages/About'

function App() {

  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}/>
      <Route path="/leaderboard" element={<ProtectedRoute> <Leaderboard /> </ProtectedRoute>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup /> } />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App
