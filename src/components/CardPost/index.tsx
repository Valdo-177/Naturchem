import React from 'react'
import product from '../../assets/aceite.jpg'
import Image from 'next/image'

const CardPost = () => {
    return (
        <article className='relative overflow-hidden h-full'>
            <Image className='w-[100%] h-[100%] object-cover opacity-20' src={product} alt="Logo de naturchem" />
            <div className='absolute z-20 top-3 left-3 w-[80%]'>
                <span className='text-[0.7rem] sm:text-[0.8rem]'>Cuidado de la piel</span>
                <h4 className={`sm:text-[20px] font-[600]`}>Como el Aceite esencial calendula es un Crack</h4>
                <span className='text-[0.7rem] sm:text-[0.8rem]'>13/09/2024</span>
            </div>
        </article>
    )
}

export default CardPost