import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/UpdateForm';

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
        <Route path="/update-form/:id" element={<UpdateForm />} />
      </Routes>
    </>
  )
}

export default App;