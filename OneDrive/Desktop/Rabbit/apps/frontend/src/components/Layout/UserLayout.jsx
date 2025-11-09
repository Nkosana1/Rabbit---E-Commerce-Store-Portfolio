import React from 'react'
import Header from '../Common/Header'
import CartDrawer from './CartDrawer'

const UserLayout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header */}
      <Header onCartOpen={openCart} />

      {/* Main content */}
      <main className="container mx-auto flex-1 px-6 py-10">{children}</main>

      {/* Footer placeholder */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rabbit Store. All rights reserved.
      </footer>

      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </div>
  )
}

export default UserLayout
