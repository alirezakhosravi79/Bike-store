import { useParams } from "react-router-dom";
import { bikesData } from "../data";
import { BikeType } from "../data";
import { useCart } from "../context/CartContext";

function Details() {
  // گرفتن id از URL
  const { id } = useParams();

  // پیدا کردن محصول با id
  const product: BikeType | undefined = bikesData.find(
    (bike) => bike.id.toString() === id
  );

  const {addToCart} = useCart()
  // اگر محصول پیدا نشد
  if (!product) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  return (
    <section className="bg-black py-16 px-6 text-white">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row gap-10">
        {/* تصویر محصول */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-xl object-contain"
        />

        {/* اطلاعات محصول */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-400 mb-2">Brand: {product.brand}</p>
          <ul className="text-gray-300 space-y-1 mb-4">
            <li>Speed: {product.speed} km/h</li>
            <li>Weight: {product.weight} kg</li>
            <li>Material: {product.material}</li>
            <li>Color: {product.color}</li>
            <li>Price: ${product.price}</li>
          </ul>

          <button onClick={() => addToCart(product)}
          className="bg-orange-600 text-white px-6 py-2 rounded font-semibold hover:bg-orange-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Details;
