import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function UpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: '',
    discountedPrice: '',
    originalPrice: '',
    quantity: '',
    category: '',
  });
  const [errorInput, setInputError] = useState('');
  const [Images, setImages] = useState();

  const handleImageUpload = (e) => {
    const ImagesArray = Array.from(e.target.files);
    console.log(ImagesArray);
    setImages(ImagesArray);
  };

  const handleChange = (e) => {
    setInputError('');
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(Images);
    const {
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
    } = formData;

    if (
      title.length <= 0 ||
      description.length <= 0 ||
      discountedPrice <= 0 ||
      originalPrice <= 0 ||
      quantity <= 0 ||
      category.length <= 0
    ) {
      return setInputError('Enter The Information Inside Fields Correctly');
    }

    let formDataBody = new FormData();
    formDataBody.append('title', title);
    formDataBody.append('description', description);
    formDataBody.append('category', category);
    formDataBody.append('discountedPrice', discountedPrice);
    formDataBody.append('originalPrice', originalPrice);
    formDataBody.append('quantity', quantity);
    formDataBody.append('rating', rating);

    console.log(Images)
    if (Images) {
        Images?.map((ele) => {
          formDataBody.append('files', ele);
        });
      } else {
        formDataBody.append('images', formData.images);
      }
  
      console.log('formDataBody', formDataBody);
      console.log('Images', Images);
      console.log('formData.images', formData);

      // eslint-disable-next-line no-unused-vars
      let requestdata = await axios
      .put(
        `https://ecommerce-follow-along-tbuy.onrender.com/product/update-products/${id}`,
        formDataBody,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        return res;
      })
      .catch((er) => {
        console.log('error', er);
        return er;
      });
  };
  useEffect(() => {
    const getDataForId = async () => {
      const singleData = await axios.get(
        `https://ecommerce-follow-along-tbuy.onrender.com/product/get-single/${id}`
      );
      console.log(singleData);
      setFormData(singleData.data.data);
      setImages(singleData.data.data.images);
      console.log('Images', Images);
    };

    getDataForId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
      <h1 className="text-center text-3xl font-bold">PRODUCT FORM</h1>
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Enter Title
          </label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.title}
            name="title"
            placeholder="Enter Product title"
            className="border border-gray-300 rounded-none w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Enter Description
          </label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Enter Description"
            className="border border-gray-300 rounded-none w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="discountedPrice" className="block text-gray-700 font-medium mb-2">
            Discounted Price
          </label>
          <input
            type="number"
            name="discountedPrice"
            onChange={handleChange}
            value={formData.discountedPrice}
            placeholder="Discounted price.."
            className="border border-gray-300 rounded-none w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="originalPrice" className="block text-gray-700 font-medium mb-2">
            Original Price
          </label>
          <input
            type="number"
            onChange={handleChange}
            name="originalPrice"
            value={formData.originalPrice}
            placeholder="Original price.."
            className="border border-gray-300 rounded-none w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
            Stock Quantity
          </label>
          <input
            type="number"
            onChange={handleChange}
            value={formData.quantity}
            name="quantity"
            placeholder="Enter the Stock Quantity.."
            className="border border-gray-300 rounded-none w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="images" className="block text-gray-700 font-medium mb-2">
            Upload Product Images
          </label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="border border-gray-300 rounded-none w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
            Enter Category
          </label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.category}
            name="category"
            placeholder="Enter the category..."
            className="border border-gray-300 rounded-none w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
            Enter Rating of Product
          </label>
          <input
            value={formData.rating}
            name="rating"
            type="number"
            onChange={handleChange}
            placeholder="Rating of the product"
            className="border border-gray-300 rounded-none w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {errorInput && (
          <p className="text-red-500 text-sm">{errorInput}</p>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-none hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
