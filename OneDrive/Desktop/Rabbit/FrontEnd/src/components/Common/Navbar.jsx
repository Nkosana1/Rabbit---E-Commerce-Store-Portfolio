import React from 'react';
import { HiOutlineredUser,HiOutlineShoppingBag,HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';

const Navbar = () => {
  return (
    <nav className='containermx-auto flex items-center justify-between py-4 px-6'>
        {/*left - logo*/}
        <div>
             <link to ='/' className='text-2xl font-medium'>Rabbit</link>
        </div>

        {/*Center - Navigation links*/}
        <div className='hidden md:flex space-x-6'>
            <link to ='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</link>
            <link to ='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</link>
            <link to ='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</link>
            <link to ='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom Wear</link>
        </div>

        {/*Right - Icons*/}
        <div className='flex items-center space-x-4'>
            <link to='/profile' className='hover:text-black'>
            <HiOutlineredUser className='h-6 w-6 text-gray-700'/>
            </link>

            <button className='relative hover:text-black'>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>

            <span className='absolute -top-1 bg-rabbit-red text-white rounded-full text-xs px-2 py-0.5 '>0</span>
            </button>

            {/* search */}
            <div className='overflow-hidden'>
                <SearchBar/>

            </div>
            

            <button className='md:hidden'><HiBars3BottomRight className='h-6 w-6 text-gray-700'/></button>
        </div>
      
    </nav>

    <CartDrawer/>
  );
};

export default Navbar
