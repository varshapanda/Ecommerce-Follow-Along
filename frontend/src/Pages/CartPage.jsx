import axios from 'axios';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import CartCard from '../components/ProductCard/CartCard';


function CardPage(){
  const [UsersCartData, setUsersCartData] = useState([]);
  const data = useSelector((state) => state.user);
  useEffect(()=>{
    const getCartData=async()=>{
      const token = localStorage.getItem('token');
      if(!token){
        return alert('Token is missing, please login');
      }
      const response = await axios.get(
        `https://ecommerce-follow-along-lkys.onrender.com/cart/get-user-cart-data?token=${token}`
      );
      console.log(response);
      setUsersCartData(response.data.cartData);
    };
    getCartData();
  }, []);
  return(
    <div>
       {UsersCartData.length > 0 ? (
        <>
          <Link to={`/select-address`}>
            <button className="bg-slate-800 text-white px-5 py-2 rounded-md ml-40">
              Checkout
            </button>
          </Link>
          {UsersCartData?.map((singleCartObject, index) => {
            return (
              <div key={index}>
                <CartCard
                  title={singleCartObject.productId?.title}
                  image={singleCartObject.productId?.images[0]}
                  description={singleCartObject.productId?.description}
                  originalPrice={singleCartObject.productId?.originalPrice}
                  discountedPrice={singleCartObject.productId?.discountedPrice}
                  id={singleCartObject.productId?._id}
                  createdBy={'varsha@.com'}
                />
              </div>
            );
          })}
        </>
      ) : (
        <div className="flex justify-center max-h-[100vh] items-center">
          <h1>Cart is empty</h1>
        </div>
      )}
  </div>
  );
}

export default CardPage;