import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../components/ProductCard/CartCard'
import { useNavigate } from 'react-router-dom';
import { handlePay } from '../Utils/Razorpay';

export default function OrderConfirmation() {
  const [cartData, setUsersCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [userAddress, setAddress] = useState(
    JSON.parse(localStorage.getItem('address')) || {}
  );
  const navigate = useNavigate();

  const data = useSelector((state) => state.user);
  useEffect(() => {
    const getCartData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('Token is missing , Please login');
      }
      const response = await axios.get(
        `https://ecommerce-follow-along-lkys.onrender.com/cart/get-user-cart-data?token=${token}`
      );

      let sum = 0;
      response.data.cartData.forEach((ele, index) => {
        sum = sum + ele.productId.originalPrice;
      });
      setTotal(sum);

      setUsersCartData(response.data.cartData);
    };

    getCartData();
  }, []);

  const OrderConfirmation = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('Token is missing please signup');
    }
    const response = await axios.post(
      `https://ecommerce-follow-along-lkys.onrender.com/orders/confirm-order?token=${token}`,
      {
        Items: cartData,
        address: userAddress,
        totalAmount: total,
      }
    );

    handlePay(total, token, cartData)
    .then((res) => {
      navigate('/order-history');
    })
    .catch((er) => console.log(er.message));

    console.log(response);
  };


  return (
    <div>
      <div>
        <p className="text-xl text-center font-bold text-gray-800 mb-4">
          Order Confirmation Page
        </p>
        <div className="flex justify-between border-b-2 border-gray-300 pb-4">
          <p className="mt-5">Order Total: {total}</p>
          <div
            className="p-4 bg-white w-1/2"
            onClick={() => handleClickAddress(userAddress._id)}
          >
            <div style={{ marginBottom: '8px' }}>
              <h3 className="text-base font-medium text-gray-800 capitalize mb-2">
                {userAddress.addressType || 'Address'}
              </h3>
              <div className="text-gray-600">
                <p>{userAddress.address1}</p>
                {userAddress.address2 && <p>{userAddress.address2}</p>}
                <p>
                  {userAddress.city}
                  {userAddress.zipCode && `, ${userAddress.zipCode}`}
                </p>
                <p>{userAddress.country}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 p-4 bg-gray-100 rounded-lg shadow-md">
          {cartData &&
            cartData?.map(({ productId }, index) => {
              return (
                <div key={productId._id}>
                  <CartCard
                    title={productId.title}
                    description={productId.description}
                    createdBy={productId.userEmailAddress}
                    discountedPrice={productId.discountedPrice}
                    image={productId.images}
                    originalPrice={productId.originalPrice}
                  />
                </div>
              );
            })}
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-green-500" onClick={OrderConfirmation}>
             Confirm order {total}
          </button>
        </div>
      </div>
    </div>
  );
}