import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../components/ProductCard/CartCard';

function OrderHistory() {
  const [OrderedData, SetOrderedData] = useState([]);
  const data = useSelector((state) => state.user);

  const fetchedOrderedProducts = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('Token is missing , Please login');
    }
    const response = await axios.get(
      `https://ecommerce-follow-along-lkys.onrender.com/orders/user-orders-data?token=${token}`
    );
    const reversedData = response.data.orders?.reverse();
    console.log(response.data.orders);
    SetOrderedData(reversedData);
  };
  useEffect(() => {
    fetchedOrderedProducts();
  }, []);

  const handleCancel = async (id) => {
    console.log(id);
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('Token is missing , Please login');
    }
    await axios.patch(
      `https://ecommerce-follow-along-lkys.onrender.com/orders/cancel-order?token=${token}&orderId=${id}`
    );
    fetchedOrderedProducts();
  };

  return (
    <div>
      {OrderedData?.map((singleCartObject, index) => {
        return (
          <div key={index}>
            <CartCard
              title={singleCartObject.orderItems.title}
              image={singleCartObject.orderItems.images[0]}
              description={singleCartObject.orderItems?.description}
              originalPrice={singleCartObject.orderItems?.originalPrice}
              discountedPrice={singleCartObject.orderItems?.discountedPrice}
              id={singleCartObject._id}
              orderStatus={singleCartObject?.orderStatus}
              createdBy={'varsha@gmail.com'}
              handleCancel={handleCancel}
            />
          </div>
        );
      })}
    </div>
  );
}

export default OrderHistory;