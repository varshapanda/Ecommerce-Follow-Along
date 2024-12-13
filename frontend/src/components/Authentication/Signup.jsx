import { useState } from 'react';
import ValidationObject from '../../../Validation.js';
import { Link } from 'react-router-dom';

function Signup() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        file: '',
      });
      const [error, setError] = useState('');
      const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      };
    
      const handleSubmit = () => {
        const NameVerify = ValidationObject.validateName(data.name);
        const EmailVerify = ValidationObject.validateEmail(data.email);
        const PassVerify = ValidationObject.validatePass(data.password);
    
        if (typeof NameV == 'string' && NameVerify.length > 1) {
          return setError(NameVerify);
        }
        if (typeof EmailV == 'string' && EmailVerify.length > 2) {
          return setError(EmailVerify);
        }
        if (typeof PassV == 'string' && PassVerify.length > 2) {
          return setError(PassVerify);
        }
      };
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center text-black-700 mb-4">
          Signup
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="file"
            className="block text-gray-700 font-medium mb-2"
          >
            Upload File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg , .jpeg , .png"
            onChange={handleChange}
            className="w-full text-gray-700 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <p className="text-red">{error}</p>
        <button
          type="submit"
          onChange={handleSubmit}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Signup
         
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account ? <Link to={'/Login'}>Login</Link>

        </p>

      </form>
    </div>
  );
}

export default Signup;
