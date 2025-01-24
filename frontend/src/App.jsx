import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/UpdateForm';
import SingleProductPage from './Pages/SingleProductPage';
import CartPage from './Pages/CartPage';
import ProfilePage from './Pages/Profile';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignupForm /> */}
      {/* <h1>Follow-along application</h1> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm />} />
        <Route path="/product-details/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App;