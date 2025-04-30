// pages/Cart.tsx
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} =
    useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-6 mb-10">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-gray-800 p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-orange-400 font-bold mt-2">
                       Price: ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-600 cursor-pointer text-white px-2 rounded hover:bg-gray-700"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-600 cursor-pointer text-white px-2 rounded hover:bg-gray-700"
                        >
                          +
                        </button>
                      </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 cursor-pointer hover:bg-red-700 px-4 py-2 rounded text-white"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* نمایش مجموع کل قیمت */}
            <div
              className="text-right bg-gray-800 flex justify-between py-8 px-6 rounded text-xl font-bold
             text-orange-400"
            >
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <button onClick={() => clearCart()} 
              className="bg-yellow-500 cursor-pointer hover:bg-yellow-300 text-black px-2 transition-all py-1 rounded">CheckOut</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
