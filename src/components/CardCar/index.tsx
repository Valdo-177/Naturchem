import { Button } from '@/components/ui/button';
import Image from 'next/image'

const CardCar = ({ item }: {
    item: {
        precioUni: number,
        cantidad: number,
        imagen: string,
        precio: number,
        tamaño: string,
        nombre: string
        codigo: string;
    }
}) => {

    function truncateText(text: string) {
        return text?.length > 26 ? `${text.slice(0, 26)}..` : text;
    }

    return (
        <article className='rounded-[8px] flex flex-col sm:flex-row items-center gap-1 sm:p-3 px-3'>
           
            <div className='w-full flex flex-col sm:flex-row items-center justify-between'>
            <div className='flex items-center gap-2 w-full sm:w-[30rem]'>
                <div className='relative sm:h-[11rem] min-w-[8rem] sm:w-[13rem]'>
                    <Image className='w-[100%] h-[100%] object-cover' src={item.imagen} alt="Logo de naturchem" width={500} height={500} />
                </div>
                <div>
                    <p className={`text-[#000000e6] text-[10px] sm:text-[12px] font-light`} >Codigo: {item.codigo}</p>
                    <h4 className={`text-[15px] sm:text-[20px] font-[400] text-container w-[12rem] sm:max-w-[23rem]`}>{truncateText(item.nombre)}</h4>
                    <p className={`text-[#000000e6] text-[13px] sm:text-[20px] font-light`} >Presentación: {item.tamaño}</p>
                    <p className={`text-[#000000e6] text-[13px] sm:text-[20px] font-light`} >Cantidad: {item.cantidad}</p>
                </div>
            </div>
                <div className='sm:p-2 mt-5 w-full sm:w-auto flex flex-col sm:items-end items-center'>
                    <div className='w-full flex sm:flex-col flex-row items-center justify-between gap-1'>
                    <p className={`text-[#000000e6] text-[15px] sm:text-[20px] font-light`} >Precio Uni: ${item.precioUni}</p>
                    <p className={`text-[#000000e6] text-[15px] sm:text-[20px] font-light`} >Total a pagar: ${item.precio}</p>
                    </div>
                    <Button className='bg-transparent shadow-none underline p-0 h- 0 hover:bg-transparent text-gray-600 mb-3'>Eliminar</Button>
                </div>
            </div>
        </article>
    )
}

export default CardCar