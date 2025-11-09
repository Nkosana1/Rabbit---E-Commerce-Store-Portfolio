import React from 'react'
import Header from '../Common/Header'

const UserLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="container mx-auto flex-1 px-6 py-10">{children}</main>

      {/* Footer placeholder */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rabbit Store. All rights reserved.
      </footer>
    </div>
  )
}

export default UserLayout
