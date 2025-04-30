import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* لوگو و منوی همبرگر */}
        <div className="flex items-center gap-4">
          {/* آیکون منو فقط در موبایل */}
          <button
            className="text-white text-3xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* عنوان سایت */}
          <Link to="/">
            <h1 className="font-bold text-3xl">Bike</h1>
          </Link>
        </div>

        {/* اینپوت سرچ - فقط دسکتاپ */}
        <div className="hidden md:block">
          <input
            className="w-[300px] h-[40px] rounded bg-gray-900 px-3"
            placeholder="Search"
            type="text"
          />
        </div>

        {/* لیست منو - مخفی در موبایل */}
        <ul className="hidden md:flex gap-8 text-gray-300">
        <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Blog</Link>
            </li>
        </ul>

        {/* آیکون‌ها */}
        <div className="flex items-center gap-6 text-xl">
          <Link to='/cart'>
          <BiShoppingBag />
          </Link>
          <BiHeart />
          <BsPerson />
        </div>
      </div>

      {/* منوی کشویی موبایل */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-300">
          <input
            className="w-full h-[40px] rounded bg-gray-900 px-3"
            placeholder="Search"
            type="text"
          />
          <ul className="space-y-2">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Blog</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
