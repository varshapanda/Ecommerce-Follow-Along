import axios from 'axios';
import { useEffect, useState } from 'react';
import CartCard from '../components/ProductCard/CartCard';

function OrderHistory() {
  const [OrderedData, SetOrderedData] = useState([]);

  const fetchedOrderedProducts = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('Token is missing , Please login');
    }
    const response = await axios.get(
      `http://localhost:8080/orders/user-orders-data?token=${token}`
    );
    SetOrderedData(response.data.orders);
    console.log(response.data.orders);
  };
  useEffect(() => {
    fetchedOrderedProducts();
  }, []);
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
              id={singleCartObject.orderItems?._id}
              orderStatus={singleCartObject?.orderStatus}
              createdBy={'varsha@gmail.com'}
            />
          </div>
        );
      })}
    </div>
  );
}

export default OrderHistory;