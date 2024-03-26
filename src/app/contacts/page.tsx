import React from 'react'

const Contacts = () => {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-36 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-blue-950">KONTAKTLAR</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3 w-full">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex-row mb-3">
            <div className="w-10 h-10 mr-3 mb-8 inline-flex items-center justify-center rounded bg-indigo-500 text-white flex-shrink-0">
              <img src="https://imedical.uz/wp-content/themes/ideas/assets/img/contacts/contacts.svg" alt="" />
            </div><br />
            <h2 className="text-gray-900 text-lg title-font font-medium">Telefon</h2>
          </div>
          <div className="flex-row">
            <a href='tel:+998440252525' className="mt-3 text-indigo-500 inline-flex items-center">
            +998440252525
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 w-full">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded bg-indigo-500 text-white flex-shrink-0">
            <img src="https://imedical.uz/wp-content/themes/ideas/assets/img/contacts/location-mark.svg" alt="" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Tashrif buyuring</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Toshkent shahri</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 w-full">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded bg-indigo-500 text-white flex-shrink-0">
            <img src="https://imedical.uz/wp-content/themes/ideas/assets/img/contacts/letter.svg" alt="" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Bizga yozing</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">info@example.uz</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font relative">
  <h1 className='text-3xl text-center font-bold text-blue-900 uppercase'>Bizning manzilimiz</h1>
  <div className="container px-5 py-12 mx-auto lg:flex">
    <div className="lg:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <div className="bg-white relative py-6">
        <div className="px-6 my-12">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Toshkent shahri</p>
        </div>
        <div className="px-6 my-12 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
        </div>
        <div className="px-6 my-12 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/2 max-lg:hidden bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="chart absolute inset-0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.839870258!2d69.11455388143587!3d41.2827379466668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1711438654632!5m2!1sru!2s"></iframe>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contacts