'use client'

import { useState } from "react"
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="text-gray-600 body-font lg:bg-white bg-blue-900 shadow-xl fixed z-50 w-full top-0">
    <div className="lg:container mx-auto flex p-5 flex-row ">
      <Link href={'/'} className="flex title-font font-bold items-center text-white lg:text-gray-900 mb-0 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-orange-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <span className="ml-3 text-4xl text-orange-500">Example</span>
      </Link>
      <nav className="mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
        <Link href={'/about'} className="max-lg:hidden link font-semibold text-blue-950 mr-5 hover:text-orange-400 text-lg">Biz haqimizda
        <div className="bar">
          <div className="filledbar"></div>
          <div className="emptybar"></div>
        </div></Link>
        <Link href={'/catalog'} className="max-lg:hidden link font-semibold text-blue-950 mr-5 hover:text-orange-400 text-lg">Katalog
        <div className="bar">
          <div className="filledbar"></div>
          <div className="emptybar"></div>
        </div></Link>
        <Link href={'/contacts'} className="max-lg:hidden link font-semibold text-blue-950 mr-5 hover:text-orange-400 text-lg">Kontaktlar
        <div className="bar">
          <div className="filledbar"></div>
          <div className="emptybar"></div>
        </div></Link>
      </nav>
      <Link href={'/search'} className="max-lg:hidden header-top__action-btn">
        <svg width="25" height="25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.25 13C10.1495 13 12.5 10.6495 12.5 7.75C12.5 4.85051 10.1495 2.5 7.25 2.5C4.35051 2.5 2 4.85051 2 7.75C2 10.6495 4.35051 13 7.25 13Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M10.9625 11.4625L14 14.5" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </Link>
      <Link href={'tel:+998440252525'} className="">
        <button className="call-button items-center text-white border-0 py-2 px-3 focus:outline-none rounded-lg text-base mr-2 mt-0">
          <div className="default-btn flex justify-center">
            <span> Telefon </span>
          </div>
          <div className="hover-btn flex justify-center">
            <span>(44)0252525</span>
          </div>
        </button>
      </Link>
      <button className="max-lg:hidden text-blue-950 hover:text-orange-400 font-semibold py-0 px-4">UZ</button> 
      <button className="lg:hidden mr-3" onClick={toggleMenu}>
        {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>
    </div>
    {isOpen && (
      <nav className="flex z-50 bg-blue-900 text-white lg:hidden px-6 py-4">
        <ul className="w-1/2">
          <li className="w-36 py-2 hover:text-orange-400 cursor-pointer"><Link href={'/about'}>BIZ HAQIMIZDA</Link></li>
          <li className="w-36 py-2 hover:text-orange-400 cursor-pointer"><Link href={'/catalog'}>KATALOG</Link></li>
          <li className="w-36 py-2 hover:text-orange-400 cursor-pointer"><Link href={'/contacts'}>KONTAKTLAR</Link></li>
        </ul>
        <div className="w-1/2 flex flex-row justify-end items-center">
          <Link href={'/search'} className="header-top__action-btn">
            <svg width="25" height="25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 13C10.1495 13 12.5 10.6495 12.5 7.75C12.5 4.85051 10.1495 2.5 7.25 2.5C4.35051 2.5 2 4.85051 2 7.75C2 10.6495 4.35051 13 7.25 13Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10.9625 11.4625L14 14.5" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </Link>
            <button className="text-white hover:text-orange-400 font-semibold py-0 px-4">UZ</button> 
        </div> 
      </nav>
    )}
  </header>
  )
}

export default Navbar