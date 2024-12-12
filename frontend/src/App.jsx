import LoginPage from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <Signup /> */}
      <Routes>
        <Route path="/" />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
export default App
