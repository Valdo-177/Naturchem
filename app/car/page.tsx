"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from '@/components/ui/skeleton'
import CardCar from '@/src/components/CardCar'
import CarouselComponent from '@/src/components/Carousel'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const Car = () => {
  const [data, setData] = useState([])
  const [infoData, setInfoData] = useState(true)
  // const [dataUser, setDataUser] = useState({
  //   nombre: "keyner"
  // })
  const router = useRouter();

  setTimeout(() => {
    setInfoData(false)
  }, 2000);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("product") || '[]');
    if (info) {
      setData(info)
    }
  }, [])

  const mensajeWhatsApp = data
    .map((producto) => {
      // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
      // return `Hola,%20mi%20nombre%20es:%20${dataUser.nombre}Nombre%20del%20producto:%20*${producto.nombre}*%0aPrecio%20Total:%20*$${producto.precio}*%0aPrecio%20Unidad:%20*$${producto.precioUni}*%0aCantidad:%20${producto.cantidad}%0aPresentacion:%20${producto.tamaño}%0a`;
      return `Nombre%20del%20producto:%20*${producto.nombre}*%0aPrecio%20Total:%20*$${producto.precio}*%0aPrecio%20Unidad:%20*$${producto.precioUni}*%0aCantidad:%20${producto.cantidad}%0aPresentacion:%20${producto.tamaño}%0a`;
    })
    .join(" %0a");
  const Url = `https://wa.me/3128158494?text=${mensajeWhatsApp}`;
  console.log(Url)

  function DialogCloseButton() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className='bg-fondo hover:bg-[#738308] p-5 text-white hover:text-white'>Enviar pedido</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Completar formulario antes de enviar el pedido</DialogTitle>
            <DialogDescription>
              Llena los campos completos
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 flex-col justify-center items-center">
            <div className='grid grid-cols-2 gap-2'>
              <div className="gap-2">
                <Label htmlFor="link" className="text-[#232323]">
                  Nombre*
                </Label>
                <Input
                  id="link"
                  placeholder='Jose..'
                  onChange={({ target: value }) => console.log(value)}
                  className='text-black'
                />
              </div>
              <div className="gap-2 ">
                <Label htmlFor="link" className="text-[#232323]">
                  Apellido*
                </Label>
                <Input
                  id="link"
                  placeholder='Perez..'
                  onChange={({ target: value }) => console.log(value)}
                  className='text-black'
                />
              </div>
            </div>
            <div className="gap-2 w-full ml-0">
              <Label htmlFor="link" className="text-[#232323]">
                Direccion*
              </Label>
              <Input
                id="link"
                defaultValue="Jose.."
                onChange={({ target: value }) => console.log(value)}
                className='text-black'
              />
            </div>
            <div className="gap-2 w-full ml-0">
              <Label htmlFor="link" className="text-[#232323]">
                Telefono*
              </Label>
              <Input
                id="link"
                defaultValue="Jose.."
                onChange={({ target: value }) => console.log(value)}
                className='text-black'
              />
            </div>
            {/* <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button> */}
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" className='bg-fondo hover:bg-[#738308] p-5' onClick={() => router.push(Url)}>
                Enviar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }


  return (
    <>
      <section className="bg-[#EBEBEB] text-black">
        <div className="2xl:w-[90rem] xl:w-full sm:h-[27rem] h-[8rem] w-auto mx-auto">
          <CarouselComponent />
        </div>
      </section>
      <section className="bg-[#EBEBEB] text-black px-2 py-5 sm:px-10 sm:py-5">
        <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-center flex-col gap-3">
          <div className='flex-col flex items-center w-full gap-1'>
            <div className="w-full flex sm:p-4 gap-2 rounded-tl-[8px] items-center rounded-tr-[8px] border px-4 py-2 bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Carro de compras</h4>
              <div>
                <DialogCloseButton />
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
                <CardCar item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Car 