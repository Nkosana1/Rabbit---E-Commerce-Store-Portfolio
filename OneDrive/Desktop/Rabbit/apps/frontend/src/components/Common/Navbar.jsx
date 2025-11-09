import React from 'react'
import { Link } from 'react-router-dom'
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* left - logo */}
        <div>
          <Link to="/" className="text-2xl font-medium text-gray-900">
            Rabbit
          </Link>
        </div>

        {/* center - navigation links */}
        <div className="hidden items-center space-x-6 md:flex">
          {['Men', 'Women', 'Top Wear', 'Bottom Wear'].map((label) => (
            <Link
              key={label}
              to="#"
              className="text-sm font-medium uppercase text-gray-700 transition hover:text-black"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* right - icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button
            type="button"
            className="relative hover:text-black focus:outline-none"
            aria-label="Open cart"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -right-2 -top-1 rounded-full bg-rabbit-red px-2 py-0.5 text-xs font-semibold text-white">
              0
            </span>
          </button>

          {/* search */}
          <div className="hidden overflow-hidden lg:block">
            <SearchBar />
          </div>

          <button
            type="button"
            className="md:hidden"
            aria-label="Open navigation menu"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer />
    </>
  )
}

export default Navbar
