import React from 'react'
import product from '../../assets/aceite-esencial.webp'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface CardPostProps {
    item?: {
        label: string;
        subTitle: string;
    }
}

const CardPost = ({item}:CardPostProps) => {
    const router = useRouter()
    return (
        <article className='relative overflow-hidden h-full text-white rounded-[8px]'>
            <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={product} alt="Logo de naturchem" />
            <div className='absolute z-20 bg-[#23232378] w-full h-full'></div>
            <div className='absolute z-30 top-3 left-3 w-[80%] h-[90%] flex flex-col items-start justify-between'>
                <div>
                    <span className='text-[0.7rem] sm:text-[0.8rem]'>{item?.subTitle}</span>
                    <h4 className={`sm:text-[22px] font-[600]`}>{item?.label}</h4>
                </div>
                <Button className='bg-fondo hover:bg-[#738308]' onClick={() => router.push(`/Category/${item?.label}`)}>Ver categoría</Button>
            </div>
        </article>
    )
}

export default CardPost