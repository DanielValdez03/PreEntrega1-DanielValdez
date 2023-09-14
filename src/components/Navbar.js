import React from 'react'
import Cartwidget from './CartWidget'

export default function Navbar() {
  return (
        <nav className="bg-black">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-white">GoldenBoy Camisetas</h1>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Equipos</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Nacionalidades</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Nosotros</a>
          </div>
        </div>
      </div>
      <Cartwidget/>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Equipos</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Nacionalidades</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Nosotros</a>
    </div>
  </div>
</nav>
    
  )
}
