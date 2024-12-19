import { useState } from 'react';
import Card from '../components/ProductCard/Card'

function HomePage() {
  const [data, setdata] = useState(
    new Array(20).fill({ title: 'A Man Called Ove' })
  );
  return (
    <>
      <h1 className="text-center">Home Page for Follow Along</h1>

      <div className="grid grid-cols-3 gap-4">
        {data.map((ele, index) => {
          return (
            <div key={index} style={{ margin: 'auto' }} className="border-white">
              <Card title={ele.title} Index={index} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;