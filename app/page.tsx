"use client"
import { ChevronRight } from "lucide-react";
import CardProduct from "@/src/components/CardProduct";
import CardPost from "@/src/components/CardPost";
import GetData from "@/src/Hooks/GetData";
import CarouselComponent from "@/src/components/Carousel";
import { CategorySection } from "@/lib/Data";
import Image from "next/image";
import Cardt from "../src/assets/CardNaturchem.png"
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { documents } = GetData("Aceite esencial");
  return (
    <>
      <main>
        <section className="bg-[#EBEBEB] text-black">
          <div className="2xl:w-[90rem] xl:w-full sm:h-[27rem] h-[8rem] w-auto mx-auto">
            <CarouselComponent />
          </div>
        </section>
        <section className="bg-[#EBEBEB] text-black">
          <div className="xl:w-[75rem] w-auto mx-auto p-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h4 className='text-[25px] font-[600] w-full text-start text-black cursor-pointer'>Sobre Nosotros</h4>
                <p className="w-full sm:w-[50rem] text-[14px] sm:text-[1rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti asperiores odio repellat? Nihil perspiciatis ullam, facere animi, a totam maxime officia atque tempora quas voluptas quibusdam, inventore qui molestiae!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti asperiores odio repellat? Nihil perspiciatis ullam, facere animi, a totam maxime officia atque tempora quas voluptas quibusdam, inventore qui molestiae!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti asperiores odio repellat? Nihil perspiciatis ullam, facere animi, a totam maxime officia atque tempora quas voluptas quibusdam, inventore qui molestiae!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti asperiores odio repellat? Nihil perspiciatis ullam, facere animi, a totam maxime officia atque tempora quas voluptas quibusdam, inventore qui molestiae!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti asperiores odio repellat? Nihil perspiciatis ullam, facere animi, a totam maxime officia atque tempora quas voluptas quibusdam, inventore qui molestiae!
                </p>
              </div>
              <div className="h-[25rem] relative w-[19.5rem]">
                <Image className='w-[100%] h-[100%] absolute object-cover z-10' src={Cardt} alt="Logo de naturchem" />
              </div>
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
                {documents.map((item, index) => (
                  <CardProduct tate={2} item={item} key={index} />
                ))}
              </div>
              {documents.length == 0 && <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
                <Skeleton className="h-[33.7rem] rounded-none w-[16rem]" />
                <Skeleton className="h-[33.7rem] rounded-none w-[16rem]" />
                <Skeleton className="h-[33.7rem] rounded-none w-[16rem]" />
                <Skeleton className="h-[33.7rem] rounded-none w-[16rem]" />
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
          <div className="2xl:w-[90rem] xl:w-full sm:h-[27rem] h-[8rem] w-auto mx-auto">
            <CarouselComponent />
          </div>
        </section>
        {/* <section className="px-2 py-5 sm:px-10 sm:py-5 bg-[#232323]">
          <div className="flex flex-col 2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto gap-4">
          <div className="flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Aceite esencial</h4>
              <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
                {GetData("Aceite esencial").documents.map((item, index) => (
                  <CardProduct tate={2} item={item} key={index} />
                  ))}
                  </div>
            </div>
            <div className="flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Aceite</h4>
              <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
              <CardProduct tate={2} />
              <CardProduct tate={2} />
              <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
              </div>
            </div>
            <div className="flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Extracto</h4>
              <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
              </div>
            </div>
            <div className="flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Base de glicerina-ceras-parafinas</h4>
              <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
