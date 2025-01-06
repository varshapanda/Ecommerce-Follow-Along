import { useEffect,useState } from 'react';
import Card from '../components/ProductCard/Card';
import axios from 'axios';

function HomePage() {
  const [data, setdata] = useState();
  const fetchProduct = async()=>{
    const response = await axios.get('http://localhost:8080/product/get-products');
    setdata(response.data.data);

  }
  useEffect(() => {

    const callhandle = async () => {
      await fetchProduct();
    };
    callhandle();
  }, []);
  console.log(data);

  return (
    <>
      <h1 className="text-center">Home Page for Follow Along</h1>

      <div className="grid grid-cols-3 gap-4">
        {data?.map((ele, index) => {
          return (
            <div key={index} style={{ margin: 'auto' }} className="border-white">
              <Card
                title={ele.title}
                image={ele.images[0] ? ele.images[0] : 'Product Image missing'}
                Index={index}
                description={ele.description}
                originalPrice={ele.originalPrice}
                discountedPrice={ele.discountedPrice}
                rating={ele.rating}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;