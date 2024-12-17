function Card({ title, Index }) { // Changed Index to index
    return (
      <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/736x/0e/8d/f1/0e8df1747723491f9574bdf6c9a1f5f5.jpg"
            alt="Product"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -20%
          </span>
        </div>
  
        {/* Content Container */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {title} - {Index + 1} {/* Changed Index to index */}
          </h3>
  
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">
          A heartwarming tale about Ove, a grumpy yet loveable old man whose life
          changes when a lively young family moves in next door.
          </p>
  
          {/* Rating */}
          <div className="flex items-center mb-4">
            <span className="ml-2 text-sm text-gray-600">(4.5)</span>
          </div>
  
          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">$199.99</span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                $249.99
              </span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;