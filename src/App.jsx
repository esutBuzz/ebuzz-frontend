import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
