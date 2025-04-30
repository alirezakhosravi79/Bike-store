import { Link } from "react-router-dom";
import { bikesData } from "../data";
import { BikeType } from "../data";
import { useCart } from "../context/CartContext";

function Products() {
  const {addToCart} = useCart()
  return (
    <section className="bg-black py-16 px-6">
      {/* عنوان و توضیح */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          Top Bikes in Our Store
        </h2>
        <p className="text-gray-400">
          Check out our premium range of bicycles – crafted for speed, comfort,
          and adventure.
        </p>
      </div>

      {/* لیست محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
        {bikesData.map((bike: BikeType) => (
          <Link to={`/product/${bike.id}`} key={bike.id}>
            <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center text-center">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full max-w-[250px] object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-1">
                {bike.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">Brand: {bike.brand}</p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>Speed: {bike.speed} km/h</li>
                <li>Weight: {bike.weight} kg</li>
                <li>Material: {bike.material}</li>
                <li>Color: {bike.color}</li>
                <li>Price: ${bike.price}</li>
              </ul>
              <button onClick={() => addToCart(bike)}
              className="w-full bg-orange-600 text-white py-2 rounded font-semibold hover:bg-orange-700 transition">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
