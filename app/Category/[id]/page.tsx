"use client"
import { Skeleton } from '@/components/ui/skeleton'
import CardProduct from '@/src/components/CardProduct'
import GetData from '@/src/Hooks/GetData'
import { ChevronRight } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const Category = () => {
  const { id }: { id: string } = useParams()
  const { documents } = GetData(desencriptarCadena(id))
  const [infoData, setInfoData] = useState(true)

  setTimeout(() => {
    setInfoData(false)
  }, 2000);

  function desencriptarCadena(cadena: string) {
    return decodeURIComponent(cadena.replace(/%20/g, ' '));
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
        <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto grid sm:grid-cols-4 grid-cols-2 sm:gap-3">
          {documents.map(item => (
            <div className="sm:w-[22rem] flex flex-col sm:p-4 p-2 gap-2 sm:rounded-[8px] border bg-white" key={item.id} >
              <CardProduct tate={2} item={item} />
            </div>
          ))
          }
        </div>
        {documents.length == 0 && infoData ? <div className="grid 2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto sm:grid-cols-4 grid-cols-1 gap-3">
          <Skeleton className="sm:h-[33.7rem] h-[20rem] rounded-none sm:w-[22rem] w-full" />
          <Skeleton className="sm:h-[33.7rem] h-[20rem] rounded-none sm:w-[22rem] w-full" />
          <Skeleton className="sm:h-[33.7rem] h-[20rem] rounded-none sm:w-[22rem] w-full" />
          <Skeleton className="sm:h-[33.7rem] h-[20rem] rounded-none sm:w-[22rem] w-full" />
        </div> :
          documents.length == 0 && <div className='text-black h-[30rem] 2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-center'>
            No se Encontraron Los productos..
          </div>
        }

      </section>
    </>
  )
}

export default Category