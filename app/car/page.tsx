"use client"
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import CardCar from '@/src/components/CardCar'
import CarouselComponent from '@/src/components/Carousel'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import LoadingComponent from '@/src/components/Loading'
import { toast } from 'sonner'



const Car = () => {
  const [data, setData] = useState([])
  const [infoData, setInfoData] = useState(true)
  const [state, setState] = useState(false)
  const router = useRouter();

  setTimeout(() => {
    setInfoData(false)
  }, 2000);
  
    const handleLoading = (tate:boolean) => {
      setState(tate)
    }

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("product") || '[]');
    if (info) {
      setData(info)
    }
  }, [])

  const mensajeWhatsApp = data
    .map((producto) => {
      // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
      return `Nombre%20del%20producto:%20*${producto.nombre}*%0aPrecio%20Total:%20*$${producto.precio}*%0aPrecio%20Unidad:%20*$${producto.precioUni}*%0aCantidad:%20${producto.cantidad}%0aPresentacion:%20${producto.tamaño}%0a`;
    })
    .join(" %0a");
  const Url = `https://wa.me/3128158494?text=${mensajeWhatsApp}`;

  const eliminarElemento = (indiceEliminar: number) => {
    console.log(indiceEliminar);
    handleLoading(true)
    setTimeout(() => {
      const nuevoPedido = data.filter(
        (_, indice) => indice !== indiceEliminar
      );
      setData(nuevoPedido);
      const nuevoPedidoString = JSON.stringify(nuevoPedido);
      handleLoading(false)
      toast("Producto eliminado correctamente")
      localStorage.setItem("product", nuevoPedidoString);
    }, 500); 
  };

  return (
    <>
    <LoadingComponent show={state} />
      <section className="bg-[#EBEBEB] text-black">
          <div className="2xl:w-[90rem] xl:w-full sm:h-[27rem] h-[22rem] w-full px-2 mx-auto">
            <CarouselComponent />
          </div>
        </section>
      <section className="bg-[#EBEBEB] text-black px-2 py-5 sm:px-10 sm:py-5">
        <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-center flex-col gap-3">
          <div className='flex-col flex items-center w-full gap-1'>
            <div className="w-full flex sm:p-4 gap-2 rounded-tl-[8px] items-center rounded-tr-[8px] border px-4 py-2 bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Carro de compras</h4>
              <div>
              <Button type="button" className='bg-fondo hover:bg-[#738308] p-5' onClick={() => {
                handleLoading(true)
                setTimeout(() => {
                  router.push(Url)
                }, 100);
              }}>
                Enviar Pedido
              </Button>
              </div>
            </div>
            {data.length == 0 && infoData ? <div className="grid 2xl:w-[90rem] xl:w-[75rem] w-full mx-auto grid-cols-1 gap-3">
              <Skeleton className="h-[16rem] rounded-none w-full" />
              <Skeleton className="h-[16rem] rounded-none w-full" />
              <Skeleton className="h-[16rem] rounded-none w-full" />
              <Skeleton className="h-[16rem] rounded-none w-full" />
            </div> :
              data.length == 0 && <div className='text-black h-[30rem] 2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-center'>
                Aun no agregas nada al pedido..
              </div>
            }
            {data.map((item, index) => (
              <div className="grid grid-cols-1 pt-3 sm:pt-0 gap-3 bg-white w-full" key={index}>
                <CardCar item={item} deleteFunction={eliminarElemento} number={index}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Car 