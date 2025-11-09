import React from 'react'
import { IoMdClose } from 'react-icons/io'

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        role="presentation"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
        }}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-3/4 flex-col bg-white shadow-lg transition-transform duration-300 sm:w-1/2 md:w-1/3 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rabbit-red"
            aria-label="Close cart drawer"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        {/* Content placeholder */}
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 px-6 text-center text-gray-500">
          <h2 className="text-xl font-semibold text-gray-900">
            Your cart is empty
          </h2>
          <p>Add items to your cart to see them here.</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-rabbit-red px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
          >
            Continue shopping
          </button>
        </div>
      </div>
    </>
  )
}

export default CartDrawer
