import Image from 'next/image'
import React from 'react'

function Header() {
  return (
	<header className="sticky top-0 z-50 flex justify-center items-center mt-10 w-1/2">
          <div className="p-[2px] bg-gradient-to-r from-black via-red-600 to-black rounded-full w-11/12 max-w-5xl">
            <div className="flex items-center justify-between bg-black/80 backdrop-blur-md text-white rounded-full px-6 py-2">
              {/* Logo */}
              <div className="mr-12">
                <Image
                  src="/logow.png"
                  alt="Logo"
                  width={100}
                  height={200}
                  className="w-14  rounded-full"
                />
              </div>

              {/* Nav Items */}
              <nav className="flex items-center space-x-8">
                <p className="cursor-pointer hover:text-red-400 transition">
                  About
                </p>
                <p className="cursor-pointer hover:text-red-400 transition">
                  Projects
                </p>
                <p className="cursor-pointer hover:text-red-400 transition">
                  Testimonials
                </p>
                <p className="cursor-pointer hover:text-red-400 transition">
                  Service
                </p>
              </nav>

              {/* Contact Button */}
              <div className="ml-12">
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header