import { BiMessageError } from "react-icons/bi"; 
import { TbError404 } from "react-icons/tb"; 
import { BiError } from "react-icons/bi"; 
import { BiErrorAlt } from "react-icons/bi"; 
import { NavLink } from "react-router-dom";
import { IoMdPeople } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdFastfood } from "react-icons/md";


export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/Orders" className={menuClass}>
            <MdShoppingCart className="mr-4 text-xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/Customer" className={menuClass}>
            <IoMdPeople className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/ListUser" className={menuClass}>
            <IoMdPeople className="mr-4 text-xl" />
            List Of User
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-9" to="/Home" className={menuClass}>
            <IoMdPeople className="mr-4 text-xl" />
            Guest Home
          </NavLink>
        </li>
        <li>
        <NavLink
                id="menu-8"
                to="/products"
                className={menuClass}
            >
                <MdFastfood className="mr-4 text-xl" />
                Products
        </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="*" className={menuClass}>
          <TbError404 className="mr-4 text-xl" />
            Error 404
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-5" to="/Error400" className={menuClass}>
            <BiError className="mr-4 text-xl" />
            Error 400
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-6" to="/Error401" className={menuClass}>
          <BiMessageError className="mr-4 text-xl" />
            Error 401
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-7" to="/Error403" className={menuClass}>
          <BiErrorAlt className="mr-4 text-xl" />
            Error 403
          </NavLink>
        </li>

      </ul>
    </div>
  );
}
