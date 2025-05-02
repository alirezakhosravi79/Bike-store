import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

type FormData = {
  email: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const { login } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    const email = data.email.trim();        // حذف فاصله اضافی
    const password = data.password.trim();  // حذف فاصله اضافی

    if (email === "test@example.com" && password === "123456") {
      login();

      // افزودن محصول در انتظار
      const pending = localStorage.getItem("pendingProduct");
      if (pending) {
        const product = JSON.parse(pending);
        addToCart(product);
        localStorage.removeItem("pendingProduct");
      }

      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-900 border border-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Login to Your Account
        </h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
