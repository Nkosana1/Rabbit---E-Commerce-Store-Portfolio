import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <section className="py-16 text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Welcome to Rabbit Store
                </h1>
                <p className="mt-4 text-gray-600">
                  Build your storefront experience here.
                </p>
              </section>
            </UserLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
