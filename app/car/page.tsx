"use client"
import CardCar from '@/src/components/CardCar'
import CarouselComponent from '@/src/components/Carousel'
import React, { useEffect, useState } from 'react'

const Car = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("product") || '[]');
    if (info) {
      setData(info)
    }
  }, [])



  return (
    <section className="bg-[#EBEBEB] text-black px-2 py-5 sm:px-10 sm:py-5">
      <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-center flex-col gap-3">
        <div className="2xl:w-[90rem] xl:w-full sm:h-[27rem] w-auto mx-auto">
          <CarouselComponent />
        </div>
        <div className='flex items-center'>
          <div className="min-h-[39rem] w-full flex flex-col sm:p-4 gap-2 rounded-[8px] border bg-white">
            <h4 className='text-[20px] font-[600] w-full text-start text-black p-4 sm:p-0'>Carro de compras</h4>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
              {data.map((item, index) => (
                <CardCar item={item} key={index}/>
              ))}
            </div>
          </div>
          {/* <div className='bg-white rounded-[8px]'>
          hello
        </div> */}
        </div>
      </div>
    </section>
  )
}

export default Car 