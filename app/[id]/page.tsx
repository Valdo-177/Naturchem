"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import ItemPrice from '@/src/components/ItemPrice'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import GetProduct from '@/src/Hooks/GetProduct'
import { useParams } from 'next/navigation'

const Products = () => {
  const path = useParams()
  const [counter, setCounter] = useState(1)
  const [selectedValue, setSelectedValue] = useState<string>("")
  const { product = {
    nombre: 'Producto de Prueba',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quibusdam! Repudiandae maiores natus dolorum et officia repellat commodi vitae, officiis nisi optio sed dolore mollitia ratione necessitatibus esse veniam explicabo.',
    codigo: '1234',
    imagen: 'https://firebasestorage.googleapis.com/v0/b/naturchem-6f313.appspot.com/o/PXL_20240917_120238868.jpg?alt=media&token=9838de18-78b5-4dc1-8611-17e67351290d',
    Precios: {
      "Precio X Mayor": "13.000"
    },
    id: "siohdkhsduhsdj"
     // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
  } } = GetProduct(path.id)

  const addCounter = (date: string) => {
    if (date == '+') {
      setCounter(counter + 1)
    } else {
      if (counter > 0) {
        setCounter(counter - 1)
      }
    }
  }
  return (
    <>
      <section className="bg-white text-black px-5 py-5 sm:px-10 sm:py-5">
        <div className="2xl:w-[90rem] xl:w-[75rem] gap-10 w-auto mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className='relative sm:h-[30rem] sm:w-[40rem] w-full rounded-[8px] overflow-hidden'>
            <Image className='w-[100%] h-[100%] object-cover' src={product?.imagen  ?? ''} width={500} height={500} alt='' />
          </div>
          <div className=' gap-3 w-full sm:w-[53%] flex flex-col items-start'>
            <span className='text-[0.7rem] sm:text-[0.8rem]'>{product?.codigo}</span>
            <h4 className='text-[25px] font-[600] w-full text-start text-black cursor-pointer'>{product?.nombre}</h4>
            <p className={`text-[#000000e6] text-[1rem] font-light overflow-hidden sm:w-[30rem]`} >{product?.descripcion}</p>
            <div className='grid grid-cols-2 justify-items-stretch w-full sm:w-auto sm:grid-cols-3 gap-3'>
              <ItemPrice selectedValue={selectedValue} setSelectedValue={setSelectedValue} productPrice={product?.Precios || {"":""}} />
            </div>
            <div className='mt-5 flex items-center justify-between sm:justify-normal gap-3 w-full sm:w-auto'>
              <Button className='bg-fondo hover:bg-[#738308] p-5 ' onClick={() => console.log('total a pagar', counter * parseInt(selectedValue))}>agregar al pedido</Button>
              <Button className='bg-[#EBEBEB] hover:bg-[#EBEBEB] text-black' onClick={() => addCounter('+')}><Plus size={18} /></Button>
              {counter}
              <Button className='bg-[#EBEBEB] hover:bg-[#EBEBEB] text-black' onClick={() => addCounter('-')}><Minus size={18} /></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products