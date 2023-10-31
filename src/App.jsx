import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Landing from './pages/Landing/Landing'
import SettingDetail from './components/DisplayPanel/Components/setting/settingDetail/SettingDetail'
import NewDashboard from './pages/Dashboard/NewDashboard'
import SideBar from './SideBar/SideBar';
import SettingBody from './SettingBody/SettingBody'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/dashboard' element={<NewDashboard/>} />
        <Route path='/setting' element={<SettingDetail/>} />
        <Route path='/settingbody' element={<SettingBody/>} />
      </Routes>
    </Router>
  )
}

export default App


