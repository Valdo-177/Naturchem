"use client"
import CardProduct from '@/src/components/CardProduct'
import GetData from '@/src/Hooks/GetData'
import { ChevronRight } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const Category = () => {
  const { id }: { id: string } = useParams()
  const { documents } = GetData(desencriptarCadenaforColection(id))

  function desencriptarCadena(cadena: string) {
    return decodeURIComponent(cadena.replace(/%20/g, ' '));
  }

  function desencriptarCadenaforColection(cadena: string): string {
    return decodeURIComponent(cadena.replace(/%20/g, '_'));
  }
  return (
    <>
      <section className="bg-[#EBEBEB] text-black px-2 py-1 sm:px-10 sm:py-5">
        <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-between">
          <h4 className='text-[25px] font-[600] w-full text-start text-black cursor-pointer'>{desencriptarCadena(id)}</h4>
          <div className="items-end gap-2 hidden sm:flex justify-end w-[20rem]">
            <h3 className="text-xl font-medium cursor-pointer">Inicio</h3>
            <ChevronRight />
            <h3 className="text-xl font-medium opacity-70 cursor-pointer text-container">{desencriptarCadena(id)}</h3>
          </div>
        </div>
      </section>
      <section className="px-2 py-2 sm:px-10 sm:py-5 bg-[#EBEBEB]">
        <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto grid sm:grid-cols-4 grid-cols-1 gap-3">
          {documents.map(item => (
            <div className="sm:w-[22rem] flex flex-col p-4 gap-2 rounded-[8px] border bg-white" key={item} >
              <CardProduct tate={2} item={item} />
            </div>
          ))
          }
        </div>
        {documents.length == 0 && <div className='w-full text-black flex items-center justify-center'>
          <h2>no jai</h2>
        </div>}

      </section>
    </>
  )
}

export default Category