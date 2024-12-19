import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';



function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignupForm /> */}
      {/* <h1>Follow-along application</h1> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
      </Routes>
    </>
  )
}

export default App;