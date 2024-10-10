"use client"
import { ChevronRight } from "lucide-react";
import CardProduct from "@/src/components/CardProduct";
import CardPost from "@/src/components/CardPost";
import GetData from "@/src/Hooks/GetData";
import CarouselComponent from "@/src/components/Carousel";
import { CategorySection } from "@/lib/Data";
import Image from "next/image";
import Natu1 from "../src/assets/Natu1.jpeg"
import Natu2 from "../src/assets/Natu2.jpeg"
import Natu3 from "../src/assets/Natu3.jpeg"
import Natu4 from "../src/assets/Natu4.jpeg"
import { Skeleton } from "@/components/ui/skeleton";
import image1 from '../src/assets/98bf5902-a0f5-41ad-b619-e7bba8df8637 1.png'
import image2 from '../src/assets/IMG_4436.png'
import image3 from '../src/assets/IMG_4471.png'
import image4 from '../src/assets/IMG_4487.png'
import nad from '../src/assets/nad.png'

export default function Home() {
  const { documents } = GetData("Aceite esencial");
  const { documents: documents2 } = GetData("Materia prima");
  return (
    <>
      <main>
        <section className="bg-[#282828] text-white">
          <div className="2xl:w-[90rem] xl:w-[75rem] sm:h-[35rem] pb-8 sm:pb-0 flex flex-col sm:flex-row items-center justify-between w-full px-2 mx-auto">
            <div className="2xl:w-[35rem] xl:w-[25rem] w-full h-[25rem] relative">
              <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={nad} alt="Logo de naturchem" />
            </div>
            <div className="sm:w-[47rem] mt-5 sm:mt-0">
              <h2 className="text-[#e9e9e9] sm:font-medium text-[1rem] sm:text-[3rem] sm:leading-[3rem] leading-[1.3rem]">Revitalizando el espíritu emprendedor:</h2>
              <h1 className="text-[#e9e9e9] mb-4 font-medium text-[2.6rem] sm:text-[4rem] sm:leading-[4rem] leading-[2.6rem]"><span className="text-fondo">Naturchem</span>, tu aliado en productos naturales</h1>
              <span className="text-[#b2b2b2]">📍 Ubicados en Barranquilla | 📦 Enviamos a toda Colombia</span>
              <div className="hidden items-center gap-7 mt-2">
                {[1, 2, 3, 4].map(item => (
                  <div key={item} className="flex flex-col items-center justify-center border border-red-500">
                    <div className="h-[5rem] w-[5rem] rounded-full bg-gray-200" />
                    <span>Categoria 1</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black mt-[4rem]">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-full mx-auto p-5">
            <div className="flex flex-col items-center justify-between gap-5">
              <div className="flex items-center gap-3 flex-col w-full">
                <h2 className='sm:text-4xl text-3xl font-[600] w-full text-center cursor-pointer text-fondo'>¿Quienes somos?</h2>
                <div className="flex items-center gap-3 flex-col sm:flex-row">
                  <p className="w-full tracking-wide sm:w-[60rem] sm:text-[1.3rem] text-[#000000d1] text-center">
                    Naturchem nació en respuesta al resurgimiento del espíritu emprendedor durante la pasada pandemia y a la creciente necesidad de las personas por proteger el medio ambiente. En un mundo donde buscamos alternativas más naturales y beneficiosas, tomamos la decisión de producir, importar y distribuir materia prima e insumos para la fabricación de productos cosméticos naturales, jabones, velas, aceites esenciales y vitaminas para el cuidado de la piel.
                    <br/>
                    <br/>
                    Nuestro compromiso no solo es con el medio ambiente, sino también con apoyar a muchas amas de casa y jóvenes emprendedores que desean salir adelante, brindándoles los recursos y la educación necesaria para que puedan crear productos de calidad con un impacto positivo en la naturaleza y la sociedad.
                  </p>
                  <div className="w-[20rem] h-[25rem] relative">
                    <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={Natu3} alt="Logo de naturchem" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-fondo">
          <div className="xl:w-[63rem] w-auto mx-auto p-5 flex flex-col sm:flex-row items-center justify-between">
            <h3 className="text-white text-2xl w-[20rem]">Somos una compañia de caracter internacional</h3>
            <div className="flex items-center gap-4 text-white flex-col sm:flex-row">
              <div>
                <span className="text-4xl">10</span>
                <span className="text-lg">Años en otros paises</span>
              </div>
              <div className="w-[1px] h-[3rem] bg-[#ffffff2b] hidden sm:block" />
              <div>
                <span className="text-4xl">A</span>
                <span className="text-lg">mplia experiencia</span>
              </div>
              <div className="w-[1px] h-[3rem] bg-[#ffffff2b] hidden sm:block" />
              <div>
                <span className="text-4xl">P</span>
                <span className="text-lg">roveedor integral</span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black hidden sm:block my-8">
          <div className="xl:w-[75rem] w-auto mx-auto p-5 flex items-center justify-center gap-2">
            <div className="relative bg-fondo w-[18rem] h-[25rem] -rotate-12 hover:rotate-0 transition-all rounded-xl overflow-hidden cursor-pointer">
              <div className="bg-black h-full w-full absolute z-30 sm:bg-[#000000ab] bg-[#0000005e] hover:bg-[#0000005e]" />
              <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={Natu1} alt="Logo de naturchem" />
            </div>
            <div className="relative bg-fondo w-[18rem] h-[25rem] rotate-6 hover:rotate-0 transition-all rounded-xl overflow-hidden cursor-pointer">
              <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={Natu2} alt="Logo de naturchem" />
              <div className="bg-black h-full w-full absolute z-30 sm:bg-[#000000ab] bg-[#0000005e] hover:bg-[#0000005e]" />
            </div>
            <div className="relative bg-fondo w-[18rem] h-[25rem] -rotate-6 hover:rotate-0 transition-all rounded-xl overflow-hidden cursor-pointer">
              <div className="bg-black h-full w-full absolute z-30 sm:bg-[#000000ab] bg-[#0000005e] hover:bg-[#0000005e]" />
              <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={Natu3} alt="Logo de naturchem" />
            </div>
            <div className="relative bg-fondo w-[18rem] h-[25rem] rotate-3 hover:rotate-0 transition-all rounded-xl overflow-hidden cursor-pointer">
              <div className="bg-black h-full w-full absolute z-30 sm:bg-[#000000ab] bg-[#0000005e] hover:bg-[#0000005e]" />
              <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={Natu4} alt="Logo de naturchem" />
            </div>
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black mt-[4rem]">
          <div className="xl:w-[75rem] w-auto mx-auto p-5">
            <div className="flex flex-col items-center justify-between gap-5">
              <div className="flex items-center gap-3 flex-col">
                <div className="flex items-center gap-3 sm:flex-row flex-col">
                <div>
                <h2 className='sm:text-4xl text-3xl font-[600] w-full text-center cursor-pointer text-fondo'>Misión</h2>
                  <p className="w-full sm:w-[48rem] sm:text-[1.3rem] text-[#000000d1] text-center">
                    En Naturchem, nuestra misión es proporcionar materia prima de alta calidad para la creación de productos cosméticos naturales, incluyendo jabones, velas, aceites esenciales y vitaminas para el cuidado de la piel. Promovemos el bienestar personal y el respeto por el medio ambiente. Además, nos comprometemos a apoyar a emprendedores, amas de casa y pequeños productores, ofreciendo educación a través de cursos y herramientas para fomentar el emprendimiento y el consumo responsable.
                  </p>
                </div>
                <div>
                <h2 className='sm:text-4xl text-3xl font-[600] w-full text-center cursor-pointer text-fondo'>Visión</h2>
                  <p className="w-full sm:w-[48rem] sm:text-[1.3rem] text-[#000000d1] text-center">
                  Aspiramos a ser líderes globales en la distribución de insumos naturales para productos cosméticos, apoyando la sostenibilidad y el bienestar humano. Queremos crear una red internacional que empodere a comunidades y emprendedores, promoviendo el crecimiento económico inclusivo y el uso de productos naturales que respeten y protejan nuestro planeta.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black">
          <div className="2xl:w-[90rem] xl:w-full sm:h-[27rem] h-[22rem] w-full px-2 mx-auto">
            <CarouselComponent />
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black px-2 py-5 sm:px-10 sm:py-5 ">
          <h2 className='text-4xl font-[600] w-full text-center cursor-pointer text-fondo my-8'>Algunos de nuestros productos</h2>
          <div className="2xl:w-[90rem] xl:w-[75rem] sm:h-[50rem] w-auto mx-auto grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4">
            <div className="rounded-[8px] sm:col-span-1 sm:row-span-2 h-[10rem] sm:h-auto"><Image src={image2} width={500} height={500} alt="" className="w-full h-full object-cover" /></div>
            <div className="rounded-[8px] sm:col-span-2 sm:row-span-1 h-[10rem] sm:h-auto"><Image src={image1} width={500} height={500} alt="" className="w-full h-full object-cover" /></div>
            <div className="rounded-[8px] h-[10rem] sm:h-auto"><Image src={image3} width={500} height={500} alt="" className="w-full h-full object-cover" /></div>
            <div className="rounded-[8px] h-[10rem] sm:h-auto"><Image src={image4} width={500} height={500} alt="" className="w-full h-full object-cover" /></div>
          </div>
        </section>
        <section className="px-2 py-5 sm:px-10 sm:py-5 bg-[#EBEBEB]">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto gap-4 flex flex-col sm:flex-row items-center">
            <div className="sm:w-[24rem] w-full flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Oferta especial</h4>
              {documents2.slice(0, 1).map((item, index) => (
                <CardProduct tate={2} item={item} key={index} />
              ))}
              {documents2.length == 0 && <Skeleton className="h-[33.7rem] rounded-none w-full" />}
            </div>
            <div className="sm:w-[80%] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Mas pedidos</h4>

              <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
                {documents.slice(0, 4).map((item, index) => (
                  <CardProduct tate={2} item={item} key={index} />
                ))}
              </div>
              {documents.length == 0 && <div className="grid sm:grid-cols-3 grid-cols-2 xl:grid-cols-4 gap-3">
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
