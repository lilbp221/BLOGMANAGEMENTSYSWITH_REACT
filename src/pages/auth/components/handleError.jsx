import React from 'react'

const handleError = () => {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="text-center">
              <div className="text-6xl font-bold text-red-600">404</div>
              <div className="mt-4 text-2xl font-medium text-gray-800">Page Not Found</div>
              <div className="mt-2 text-gray-600">
                  Oops! The page you are looking for does not exist. It might have been moved or deleted.
              </div>
              <div className="mt-6">
                  <a
                      href="/"
                      className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                      Go Home
                  </a>
              </div>
          </div>
      </div>
  </div>
  )
}

export default handleError