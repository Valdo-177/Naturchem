import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CardCar = ({ item }: {
    item: {
        precioUni: number,
        cantidad: number,
        imagen: string,
        precio: number,
        tamaño: string,
        nombre: string
    }
}) => {
    const [counter, setCounter] = useState<number>(item.cantidad)
    const [price, setPrice] = useState(item.precio)


    function truncateText(text: string) {
        return text?.length > 23 ? `${text.slice(0, 23)}..` : text;
    }

    const addCounter = (date: string) => {
        if (date === '+') {
            setCounter(prevCounter => prevCounter + 1)
            setPrice(item.precioUni * (counter + 1))
        } else {
            if (counter > 1) {
                setCounter(prevCounter => prevCounter - 1)
            }
        }
    }
    useEffect(() => {
        // setPrice(counter * price)
    }, [price])


    return (
        <article className='sm:shadow-md rounded-[8px] flex items-center gap-1 p-3'>
            <div className='relative h-[11rem] min-w-[8rem]'>
                <Image className='w-[100%] h-[100%] object-cover' src={item.imagen} alt="Logo de naturchem" width={500} height={500} />
            </div>
            <div className='p-2 w-full'>
                <h4 className={`sm:text-[20px] font-[600] text-container text-[15px]`}>{truncateText(item.nombre)}</h4>
                <p className={`text-[#000000e6] text-[1rem] font-light`} >{item.tamaño}</p>
                <p className={`text-[#000000e6] text-[1rem] font-light`} >Total a pagar: ${price}</p>
                <div className='mt-5 flex items-center justify-center sm:justify-normal gap-3 w-full sm:w-auto flex-wrap'>
                    <div className='flex gap-3 items-center'>
                        <Button className='bg-[#EBEBEB] hover:bg-[#EBEBEB] text-black' onClick={() => addCounter('+')}><Plus size={18} /></Button>
                        {counter}
                        <Button className='bg-[#EBEBEB] hover:bg-[#EBEBEB] text-black' onClick={() => addCounter('-')}><Minus size={18} /></Button>
                    </div>
                    {/* <Button className='bg-transparent shadow-none underline hover:bg-transparent p-5 text-gray-600'>Eliminar</Button> */}
                </div>
            </div>
        </article>
    )
}

export default CardCar