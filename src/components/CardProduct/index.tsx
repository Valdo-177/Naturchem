import Image from 'next/image'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type ItemProps = {
    nombre: string;
    descripcion: string;
    id:string;
    codigo: string;
    imagen: string;
    Precios?: Record<string, string>;
};

interface CardProductProps {
    tate?: number;
    item?: ItemProps;
}

const CardProduct: React.FC<CardProductProps> = ({ tate, item = {
    nombre: 'Producto de Prueba',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quibusdam! Repudiandae maiores natus dolorum et officia repellat commodi vitae, officiis nisi optio sed dolore mollitia ratione necessitatibus esse veniam explicabo.',
    codigo: '1234',
    imagen: 'https://firebasestorage.googleapis.com/v0/b/naturchem-6f313.appspot.com/o/PXL_20240917_120238868.jpg?alt=media&token=9838de18-78b5-4dc1-8611-17e67351290d',
    Precios: {
        "Precio X Mayor": "13.000"
    },
    id: "siohdkhsduhsdj"
} }) => {
    const router = useRouter()
 
    const GotoDetails = (item:string) => {
        router.push(`/${item}`)
    }

    return (
        <article className='max-w-[22rem] w-auto bg-white text-black overflow-hidden cursor-pointer' onClick={()=> GotoDetails(item.id)}>
            <div className='relative h-[10rem] sm:h-[13rem]'>
                <Image className='w-[100%] h-[100%] object-cover' src={item.imagen} alt="Logo de naturchem" width={500} height={500} />
            </div>

            <div className='sm:px-5 px-2 py-5 flex flex-col gap-2 '>
                <span className='text-[12px]'>{item.codigo}</span>
                <h4 className={`text-[16px] font-[600] text-container`}>{item.nombre}</h4>
                <p className={`text-[#000000e6] text-[12px] font-extralight h-[6rem] overflow-hidden ${tate == 2 && 'hidden sm:block'}`} >{item.descripcion}</p>
                <div className='flex items-center justify-between'>
                    {Object.entries(item.Precios || {}).slice(0, 2).map(([key, value]: string[]) => (
                        <div key={key} className='flex items-center flex-col mb-2'>
                            <span className='text-[12px] font-normal'>{key}</span>
                            <span className='text-[14px] text-[#1c1c1c] font-extralight'>${value}</span>
                        </div>
                    ))}
                </div>


            </div>
            <div className='sm:px-5 px-2 py-3 sm:py-5 border-t-2'>
                <div className='flex items-center gap-2 text-[#23A6F0] justify-center'>
                    <Link href={""} className='font-bold underline text-container text-[12px]'>Ver más sobre el producto</Link>
                    <ChevronRight />
                </div>
            </div>
        </article>
    )
}

export default CardProduct