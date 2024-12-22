import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Signup from './Components/SignUp'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
