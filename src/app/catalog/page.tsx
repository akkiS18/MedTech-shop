import Link from 'next/link'
import React from 'react'

const Catalog = () => {
  return (
  <section className="text-gray-600 body-font pt-24">
    <h1 className='text-4xl text-blue-950 font-bold text-center mt-8'>Mahsulotlar</h1>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <div className='m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200'>
            <Link href={'/product'} className="block relative h-48 rounded overflow-hidden">
              <img alt="elektron tijorat" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                <p>Kategoriya</p>
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                <p>Katalizator</p>
              </h2>
              <p className="mt-1">
                  $16.00
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <div className='m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200'>
            <Link href={'/product'} className="block relative h-48 rounded overflow-hidden">
              <img alt="elektron tijorat" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                <p>Kategoriya</p>
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                <p>Katalizator</p>
              </h2>
              <p className="mt-1">
                  $16.00
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <div className='m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200'>
            <Link href={'/product'} className="block relative h-48 rounded overflow-hidden">
              <img alt="elektron tijorat" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                <p>Kategoriya</p>
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                <p>Katalizator</p>
              </h2>
              <p className="mt-1">
                  $16.00
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <div className='m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200'>
            <Link href={'/product'} className="block relative h-48 rounded overflow-hidden">
              <img alt="elektron tijorat" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                <p>Kategoriya</p>
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                <p>Katalizator</p>
              </h2>
              <p className="mt-1">
                  $16.00
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <div className='m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200'>
            <Link href={'/product'} className="block relative h-48 rounded overflow-hidden">
              <img alt="elektron tijorat" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                <p>Kategoriya</p>
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                <p>Katalizator</p>
              </h2>
              <p className="mt-1">
                  $16.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Catalog