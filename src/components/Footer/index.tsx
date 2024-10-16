import { Category } from '@/src/models'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className="bg-[#EBEBEB] text-black px-2 py-3 sm:px-10">
      <div className="2xl:w-[90rem] xl:w-full w-auto mx-auto border-t-2 p-5 flex items-center gap-2 justify-between">
        <div className='hidden sm:block'>
          <h4 className='text-[17px] font-[600] w-full text-start text-black cursor-pointer'>Categorias</h4>
          <div className='py-1 grid sm:grid-cols-2 grid-cols-1 w-full sm:w-[30rem]'>
            {Category.map((item, index) => (
              <Link className='text-[14px]' href={`/Category/${item.label}`} key={index}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div className='w-[22rem]'>
          <h4 className='text-[17px] font-[600] w-full text-start text-black cursor-pointer'>Horarios</h4>
          <div>
            <div className='flex items-center flex-row text-[14px] justify-between w-full'>
              <span>Lunes a Viernes</span>
              <span>8:00a.m. - 4:30p.m.</span>
            </div>
            <div className='flex items-center flex-row text-[14px] justify-between w-full'>
              <span>Sabados</span>
              <span>8:00a.m. - 1:00p.m.</span>
            </div>
            <div className='flex items-center flex-row text-[14px] justify-between w-full'>
              <span>Domingos</span>
              <span>Cerrado</span>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:w-[90rem] xl:w-full w-auto mx-auto border-t-2 p-5 flex items-center justify-center">
        <h4 className='sm:text-[16px] text-[12px] font-[600] w-full text-gray-700 cursor-pointer text-center'>© 2024 Naturchem 🌿| Jabones de glicerina, Materias primas cosmeticas | Todos los derechos reservados</h4>

      </div>
    </section>
  )
}

export default Footer