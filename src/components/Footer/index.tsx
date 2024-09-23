import { Category } from '@/lib/Data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className="bg-[#EBEBEB] text-black">
    <div className="2xl:w-[90rem] xl:w-full w-auto mx-auto border-t-2 p-5">
      <h4 className='text-[20px] font-[600] w-full text-start text-black cursor-pointer'>Categorias</h4>
      <div className='py-5 grid sm:grid-cols-2 grid-cols-1 w-full sm:w-[35rem]'>
        {Category.map((item, index) => (
          <Link href={`/Category/${item.label}`} key={index}>{item.label}</Link>
        ))}
      </div>
    </div>
    <div className="2xl:w-[90rem] xl:w-full w-auto mx-auto border-t-2 p-5 flex items-center justify-center">
      <h4 className='text-[16px] font-[600] w-full text-gray-700 cursor-pointer text-center'>© 2024 Naturchem 🌿| Jabones de glicerina, Materias primas cosmeticas | Todos los derechos reservados</h4>
      
    </div>
  </section>
  )
}

export default Footer