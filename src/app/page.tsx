import Slideshow from "@/components/slideshow";
import Statistics from "@/components/stat";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="z-index max-md:hidden">
        <a href="tel:+998440252525">
            <img className='w-15 h-15 lg:w-20 lg:h-20 mb-2' src="https://imedical.uz/wp-content/themes/ideas/assets/img/phone.png" alt="" />
        </a>
        <a>
            <img className='w-15 h-15 lg:w-20 lg:h-20' src="https://imedical.uz/wp-content/themes/ideas/assets/img/tg.png" alt="" />
        </a>
      </div>
      <Slideshow />
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-8 lg:w-1/4 w-full">
        <div className="shadow-xl hover:bg-gray-100 border px-4 py-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-orange-400 w-12 h-12 mb-3 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
          <h2 className="title-font font-medium text-md text-blue-900">Yuqori sifat</h2>
          <p className="leading-relaxed text-xs lg:hidden">Sifat narx/pul uchun eng yaxshi qiymatga teng</p>
        </div>
      </div>
      <div className="p-8 lg:w-1/4 w-full">
        <div className="shadow-xl hover:bg-gray-100 border px-4 py-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-orange-400 w-12 h-12 mb-3 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
          <h2 className="title-font font-medium text-md text-blue-900">Zavod afzalligi</h2>
          <p className="leading-relaxed text-xs lg:hidden">Oyiga 300 dan ortiq yotoq ishlab chiqarish quvvati</p>
        </div>
      </div>
      <div className="p-8 lg:w-1/4 w-full">
        <div className="shadow-xl hover:bg-gray-100 border px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-orange-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-md text-blue-900">Mijozlar</h2>
          <p className="leading-relaxed text-xs lg:hidden">Sotishdan oldingi va sotishdan keyingi mukammal xizmat</p>
        </div>
      </div>
      <div className="p-8 lg:w-1/4 w-full">
        <div className="shadow-xl hover:bg-gray-100 border px-4 py-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-orange-400 w-12 h-12 mb-3 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
          <h2 className="title-font font-medium text-md text-blue-900">Tajriba</h2>
          <p className="leading-relaxed text-xs lg:hidden">Har doim zaxirada: 500 dan ortiq tibbiy yotoqlar</p>
        </div>
      </div>
    </div>
  </div>
      </section>
      <section className="py-12">
      <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-blue-900 text-center">
        KATEGORIYALAR
      </h1>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <Link href={'/catalog'} className="w-full mb-8 text-2xl font-bold text-blue-900 hover:text-orange-400 border-b border-b-gray-400">Reabilitatsiya vositalari</Link>
      <Link href={'/catalog'} className="w-full mb-8 text-2xl font-bold text-blue-900 hover:text-orange-400 border-b border-b-gray-400">Tibbiy aksessuarlar</Link>
      <Link href={'/catalog'} className="w-full mb-8 text-2xl font-bold text-blue-900 hover:text-orange-400 border-b border-b-gray-400">Tibbiy asbob-uskunalar</Link>
      <Link href={'/catalog'} className="w-full mb-8 text-2xl font-bold text-blue-900 hover:text-orange-400 border-b border-b-gray-400">Tibbiy mebel</Link>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://imedical.uz/wp-content/uploads/2023/07/rectangle-305-min.png" />
    </div>
  </div>
      </section>
      <section className='max-xl:hidden'>
        <div className='main-container mt-24'>
          <div className='company-box flex justify-between'>
            <Link href={'/'} className="w-1/2 flex title-font font-bold items-center text-gray-900 py-24 px-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20 text-orange-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
                <span className="ml-3 text-8xl text-orange-500">Example</span>
            </Link>
            <div className='w-1/2 py-24 text-center font-bold text-4xl text-blue-950 px-14'>
                <h1>КОМФОРТ ДЛЯ ПАЦИЕНТОВ НА ВЫСШЕМ УРОВНЕ.</h1>
            </div>
          </div>
        </div>
      </section>
      <Statistics />
      <section className="text-gray-600 body-font px-12 py-12 max-xl:hidden">
  <div className="flex md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/3 flex px-12 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-blue-900">
        TEKIN KONSULTASIYA
      </h1>
      <p className="mb-8 leading-relaxed">Murojaat uchun</p>
      <div className="flex justify-center pb-12">
        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Telegram</a>
        <a href="tel:+998440252525" className="ml-4 inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">Telefon</a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-2/3 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://imedical.uz/wp-content/themes/ideas/assets/img/consult/img3.png" />
    </div>
  </div>
      </section>
    </div>
  );
}
