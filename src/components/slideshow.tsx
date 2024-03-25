'use client'

import React from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
    
    const slideImages = [
      {
        url: 'https://imedical.uz/wp-content/uploads/2023/07/rectangle-336-min.png',
        caption: <section className="text-gray-600 body-font">
        <div className="pl-5 py-24">
            <div className="p-4">
              <div className="containerSlide p-8">
                <div>
                  <h2 className="text-blue-950 text-5xl title-font font-bold mb-3">Кровать механическая ID-CS 04</h2>
                  <p className="leading-relaxed text-base">Это трехсекционная медицинская кровать, разработанная для оборудования медицинских учреждений и для домашнего использования.</p>
                  <button className='inline-flex items-center bg-orange-400 hover:bg-white text-white hover:text-orange-400 border border-orange-400 py-2 px-3 focus:outline-none rounded text-md mr-2 mt-4 md:mt-4'>Buyurtma berish</button>
                  <button className='inline-flex items-center bg-white hover:bg-blue-900 text-blue-900 hover:text-white border border-blue-900 py-2 px-3 focus:outline-none rounded text-md mr-2 mt-4 md:mt-4'>Batafsil</button>
                </div>
              </div>
            </div>
        </div>
      </section>
      },
      {
        url: 'https://imedical.uz/wp-content/uploads/2023/07/rectangle-336-min.png',
        caption: <section className="text-gray-600 body-font">
        <div className="px-5 py-24">
          <div>
            <div className="p-4">
              <div className="containerSlide p-8">
                <div>
                  <h2 className="text-blue-950 text-5xl title-font font-bold mb-3">Кровать механическая ID-CS 04</h2>
                  <p className="leading-relaxed text-base">Это трехсекционная медицинская кровать, разработанная для оборудования медицинских учреждений и для домашнего использования.</p>
                  <button className='inline-flex items-center bg-orange-400 hover:bg-white text-white hover:text-orange-400 border border-orange-400 py-2 px-3 focus:outline-none rounded text-md mr-2 mt-4 md:mt-4'>Buyurtma berish</button>
                  <button className='inline-flex items-center bg-white hover:bg-blue-900 text-blue-900 hover:text-white border border-blue-900 py-2 px-3 focus:outline-none rounded text-md mr-2 mt-4 md:mt-4'>Batafsil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      },
    ];
    
    export default async function Slideshow() {
        return (
          <div className="p-5 py-24">
            <Slide cssClass='rounded-2xl'>
             {slideImages.map((slideImage, index)=> (
                <div key={index}>
                  <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className='slider'>
                    <span className='max-sm:hidden'>{slideImage.caption}</span>
                  </div>
                </div>
              ))} 
            </Slide>
          </div>
        )
    }
