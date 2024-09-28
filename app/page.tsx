"use client"
import { ChevronRight } from "lucide-react";
import CardProduct from "@/src/components/CardProduct";
import CardPost from "@/src/components/CardPost";
import GetData from "@/src/Hooks/GetData";
import CarouselComponent from "@/src/components/Carousel";
import { CategorySection } from "@/lib/Data";
import Image from "next/image";
import Cardt from "../src/assets/imagenNostros.png"
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { documents } = GetData("Aceite esencial");
  return (
    <>
      <main>
        <section className="bg-[#EBEBEB] text-black">
          <div className="2xl:w-[90rem] xl:w-full sm:h-[27rem] h-[22rem] w-full px-2 mx-auto">
            <CarouselComponent />
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black mt-[4rem]">
          <div className="xl:w-[75rem] w-auto mx-auto p-5">
            <div className="flex flex-col items-center justify-between gap-5">
              <div className="flex items-center gap-3 flex-col">
                <h2 className='text-xl font-[600] w-full text-center cursor-pointer text-fondo'>¿Quienes somos?</h2>
                <p className="w-full sm:w-[45rem] text-sm text-[#000000d1] text-center">
                  En <span className="underline cursor-pointer">Naturchem</span>, nos dedicamos a la fabricacion y distribucion de materias primas naturales, quimicas y materiales en general usados para la elaboracion de productos artesanales para sus emprendimientos.
                  <br />
                  Nuestro portafolio incluye insumos para elaboracion de jabones artesanales, velas de cera y parafina, resina, productos de aseo y limpieza, tratamiento de agua. tenemos un amplio catalogo de insumos de la mejor calidad para sus emprendimientos.
                  <br />
                </p>
                {/* <p> Somos uns compañia de caracter internacional presente hace 10 años em otros paises lo que nos permite llegar a uestdes con una amplia experiencia consolidados como un proveedor integral en el segmento de productos naturales y quimicos.</p> */}
              </div>
              {/* <div className="h-[25rem] relative w-[19.5rem]">
                <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={Cardt} alt="Logo de naturchem" />
              </div> */}
            </div>
          </div>
        </section>
        <section className="bg-fondo">
          <div className="xl:w-[55rem] w-auto mx-auto p-5 flex items-center justify-between">
            <h3 className="text-white text-xl font-semibold w-[15rem]">Somos una compañia de caracter internacional</h3>
            <div className="flex items-center gap-4 text-white">
              <div>
                <span className="text-4xl">10</span>
                <span className="text-sm">Años en otros paises</span>
              </div>
              <div className="w-[1px] h-[3rem] bg-[#ffffff2b]" />
              <div>
                <span className="text-4xl">A</span>
                <span className="text-sm">mplia experiencia</span>
              </div>
              <div className="w-[1px] h-[3rem] bg-[#ffffff2b]" />
              <div>
                <span className="text-4xl">P</span>
                <span className="text-sm">roveedor integral</span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black">
          <div className="xl:w-[75rem] w-auto mx-auto p-5">
            <div className="relative bg-red-800 w-[18rem] h-[30rem]">
              <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={Cardt} alt="Logo de naturchem" />
            </div>
          </div>
        </section>
        <section className="px-2 py-5 sm:px-10 sm:py-5 bg-[#EBEBEB]">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto gap-4 flex flex-col sm:flex-row items-center">
            <div className="sm:w-[24rem] sm:h-[39rem] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Oferta especial</h4>
              <CardProduct />
            </div>
            <div className="sm:w-[80%] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Mas pedidos</h4>

              <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
                {documents.slice(0, 4).map((item, index) => (
                  <CardProduct tate={2} item={item} key={index} />
                ))}
              </div>
              {documents.length == 0 && <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
                <Skeleton className="h-[33.7rem] rounded-none w-full" />
                <Skeleton className="h-[33.7rem] rounded-none w-full" />
                <Skeleton className="h-[33.7rem] rounded-none w-full" />
                <Skeleton className="h-[33.7rem] rounded-none w-full" />
              </div>}

            </div>
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black px-2 py-1 sm:px-10">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-between">
            <h4 className='text-[25px] font-[600] w-full text-start text-black cursor-pointer'>Categorías</h4>
            <div className="items-center gap-2 hidden sm:flex">
              <h3 className="text-xl font-medium cursor-pointer">Inicio</h3>
              <ChevronRight />
              <h3 className="text-xl font-medium opacity-70 cursor-pointer">Categorías</h3>
            </div>
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black px-2 py-1 sm:px-10 sm:py-5">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto grid grid-cols-2 gap-4">
            {CategorySection.slice(0, 6).map((item, index) => (
              <div key={index} className="rounded-[8px] sm:h-[15rem] h-[10rem]">
                <CardPost item={item} />
              </div>
            ))}
          </div>
          {/* <div className="2xl:w-[90rem] mt-3 xl:w-[75rem] w-auto mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CategorySection.slice(6, 10).map((item, index) => (
              <div key={index} className="rounded-[8px] sm:h-[15rem] h-[10rem]">
                <CardPost item={item} />
              </div>
            ))}
          </div> */}
        </section>
        <section className="bg-[#EBEBEB] text-black">
          <div className="2xl:w-[90rem] xl:w-full sm:h-[27rem] h-[22rem] w-full px-2 mx-auto">
            <CarouselComponent />
          </div>
        </section>

      </main>
    </>
  );
}
