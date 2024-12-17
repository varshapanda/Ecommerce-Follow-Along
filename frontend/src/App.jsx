import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Login from './Pages/Login';



function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignupForm /> */}
      <h1>Follow-along application</h1>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App;