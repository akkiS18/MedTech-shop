import React, { Suspense } from 'react'
import Search from '../search/page'
import Table from '@/components/table';
import Skeleton from '@/components/skeleton';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const Catalog = async ({  
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <div>
      <Navbar />
  <section className="text-gray-600 body-font pt-24">
    <div className="w-full px-24">
    <h1 className='text-4xl text-blue-950 font-bold text-center mt-8'>Mahsulotlar</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
      </div>
       <Suspense key={query + currentPage} fallback={<Skeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  </section>
    <Footer />
    </div>
  )
}

export default Catalog