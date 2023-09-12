import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
