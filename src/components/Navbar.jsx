import { BsFillTelephoneFill } from "react-icons/bs"; 
import { IoMdPeople } from "react-icons/io";
import { MdShoppingCart, MdDashboard } from "react-icons/md";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import Logo from "../components/Logo";
import {Link} from "react-router-dom"

export default function Navbar() {
  const menuClass =
    "flex items-center space-x-2 p-2 rounded-xl text-sm text-gray-600 hover:text-hijau hover:bg-green-100 hover:font-semibold transition";

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Logo />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a href="/home" className={menuClass}>
              <MdDashboard className="text-lg" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#Produk" className={menuClass}>
              <MdShoppingCart className="text-lg" />
              <span>Top Produk</span>
            </a>
          </li>
          <li>
            <a href="#About" className={menuClass}>
              <IoMdPeople className="text-lg" />
              <span>About Us</span>
            </a>
          </li>
          <li>
            <a href="#Contact" className={menuClass}>
            <BsFillTelephoneFill className="text-lg" />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block w-64">
               <Link to="/Cekproduk">
                  <button className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                    Cek Produk
                  </button>
                </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <div className="relative bg-blue-100 p-2 rounded-2xl text-blue-500 cursor-pointer">
              <FaBell />
              <span className="absolute -top-1 -right-1 bg-blue-200 text-xs px-2 rounded-full">
                50
              </span>
            </div>

            <div className="bg-blue-100 p-2 rounded-2xl cursor-pointer">
              <FcAreaChart />
            </div>
          </div>

          {/* Login Button */}
          <button className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Login
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3 border-l pl-4 border-gray-300">
            <span className="text-sm font-semibold">Guest</span>
            <img
              src="https://avatar.iran.liara.run/public/28"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
