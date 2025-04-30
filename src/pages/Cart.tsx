import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
          Your Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-400 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-6 mb-10">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-800 p-4 rounded-xl gap-4"
                >
                  {/* اطلاعات محصول */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain mx-auto sm:mx-0"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg font-semibold break-words">
                        {item.name}
                      </h3>
                      <p className="text-orange-400 font-bold mt-2">
                        Price: ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* دکمه‌های تغییر تعداد */}
                  <div className="flex justify-center sm:justify-start items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-600 px-3 rounded hover:bg-gray-700 transition"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-600 px-3 rounded hover:bg-gray-700 transition"
                    >
                      +
                    </button>
                  </div>

                  {/* دکمه حذف */}
                  <div className="flex justify-center sm:justify-end">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* مجموع قیمت و دکمه پاک کردن کل */}
            <div className="bg-gray-800 flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-6 rounded text-xl font-bold text-orange-400 gap-4">
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <button
                onClick={clearCart}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded transition"
              >
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
