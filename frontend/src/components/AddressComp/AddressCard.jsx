import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddressCard = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressData = {
      city,
      country,
      address1: add1,
      address2: add2,
      zipCode,
      addressType,
    };
    console.log(addressData);
    const token = localStorage.getItem("token");
    if (!token) {
      return alert("Token missing");
    }
    const response = await axios.post(
      `https://ecommerce-follow-along-tbuy.onrender.com/user/add-address?token=${token}`,
      addressData
    );
    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Address Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Address Line 1"
          value={add1}
          onChange={(e) => setAdd1(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Address Line 2"
          value={add2}
          onChange={(e) => setAdd2(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={addressType}
          onChange={(e) => setAddressType(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Address Type</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Other">Other</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddressCard;
