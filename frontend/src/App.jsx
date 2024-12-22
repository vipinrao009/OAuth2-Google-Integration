import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import { GoogleOAuthProvider } from '@react-oauth/google'
function App() {
  const GoogleAuthWrapper = ()=>{
    return(
      <GoogleOAuthProvider clientId='1021733041469-4vaeq037oet2vcuellghbqfrunte6r5f.apps.googleusercontent.com'>
        <Login/>
      </GoogleOAuthProvider>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper/>} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
