import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
      return (
            <footer className="bg-gray-900 text-white py-8">
              <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvT9uDJ9kV7C3zO6iOt95e24Dtt3QMSncmqLLsuv4KWpeC_Gx6C0AZZpyHQWps4h-Psq8&usqp=CAU" 
                      className="h-10 " 
                      alt="Blogbook logo" 
                    />
                    <span className="text-3xl font-bold whitespace-nowrap">Blogbook</span>
                  </div>
                  <nav className="mt-4 md:mt-0">
                    <ul className="flex flex-col md:flex-row md:space-x-6 rtl:space-x-reverse text-sm font-medium">
                      <li>
                        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">About Us</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="mt-6 text-center text-sm">
                  <p>© {new Date().getFullYear()} Blogbook. All rights reserved.</p>
                </div>
              </div>
            </footer>
          );
}

export default Footer