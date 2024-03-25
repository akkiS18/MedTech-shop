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
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex-row mb-3">
            <div className="w-10 h-10 mr-3 mb-8 inline-flex items-center justify-center rounded bg-indigo-500 text-white flex-shrink-0">
              <img src="https://imedical.uz/wp-content/themes/ideas/assets/img/contacts/contacts.svg" alt="" />
            </div><br />
            <h2 className="text-gray-900 text-lg title-font font-medium">Qo'ng'iroq</h2>
          </div>
          <div className="flex-row">
            <a href='tel:+998440252525' className="mt-3 text-indigo-500 inline-flex items-center">
            +998440252525
            </a>
            <br />
            <a href='tel:+998440252525' className="mt-3 text-indigo-500 inline-flex items-center">
            +998440252525
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded bg-indigo-500 text-white flex-shrink-0">
            <img src="https://imedical.uz/wp-content/themes/ideas/assets/img/contacts/location-mark.svg" alt="" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded bg-indigo-500 text-white flex-shrink-0">
            <img src="https://imedical.uz/wp-content/themes/ideas/assets/img/contacts/letter.svg" alt="" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Neptune</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <div className="bg-white relative py-6">
        <div className="px-6 my-12">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
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
    <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="chart absolute inset-0" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contacts