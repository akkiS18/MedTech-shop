import React from 'react'

export default function Statistics() {
  return (
<section className='bg-blue-900 text-white py-12'>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">BIZNING STATISTIKAMIZ</h1>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-8 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 bg-white hover:bg-gray-200 text-blue-900 px-4 py-6 rounded-lg">
          <h2 className="title-font font-bold text-3xl">+1,500</h2>
          <p className="leading-relaxed">Yillik sotuv</p>
        </div>
      </div>
      <div className="p-8 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 bg-white hover:bg-gray-200 text-blue-900 px-4 py-6 rounded-lg">
          <h2 className="title-font font-bold text-3xl">+350</h2>
          <p className="leading-relaxed">Shifoxonalar</p>
        </div>
      </div>
      <div className="p-8 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 bg-white hover:bg-gray-200 text-blue-900 px-4 py-6 rounded-lg">
          <h2 className="title-font font-bold text-3xl">+100</h2>
          <p className="leading-relaxed">Xodimlar</p>
        </div>
      </div>
      <div className="p-8 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 bg-white hover:bg-gray-200 text-blue-900 px-4 py-6 rounded-lg">
          <h2 className="title-font font-bold text-3xl">+3</h2>
          <p className="leading-relaxed">Zavodlar</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}