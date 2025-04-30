import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ ایمپورت کانتکست
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart(); // ✅ دسترسی به سبد خرید

  // ✅ محاسبه مجموع آیتم‌ها
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-black text-white px-4 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* لوگو و منو همبرگر */}
        <div className="flex items-center gap-4">
          <button
            className="text-white text-3xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
          <Link to="/">
            <h1 className="font-bold text-3xl">Bike</h1>
          </Link>
        </div>

        {/* سرچ دسکتاپ */}
        <div className="hidden md:block">
          <input
            className="w-[300px] h-[40px] rounded bg-gray-900 px-3"
            placeholder="Search"
            type="text"
          />
        </div>

        {/* منوی اصلی دسکتاپ */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>

        {/* آیکون‌ها */}
        <div className="flex items-center gap-6 text-xl relative">
          <Link to="/cart" className="relative">
            <BiShoppingBag />
            {/* ✅ نشان دادن تعداد آیتم‌ها */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-xs text-white rounded-full px-2 py-[2px]">
                {totalItems}
              </span>
            )}
          </Link>
          <a
            href="https://github.com/alirezakhosravi79/Bike-store"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <BsPerson />
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-300">
          <input
            className="w-full h-[40px] rounded bg-gray-900 px-3"
            placeholder="Search"
            type="text"
          />
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
