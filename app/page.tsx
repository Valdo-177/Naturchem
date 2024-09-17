"use client"
import { ChevronRight } from "lucide-react";
import CardProduct from "@/src/components/CardProduct";
import CardPost from "@/src/components/CardPost";
import GetData from "@/src/Hooks/GetData";

export default function Home() {
  return (
    <>
      <main>
        <section className="bg-[#EBEBEB] text-black px-2 py-5 sm:px-10 sm:py-5">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-between">
            <h4 className='text-[25px] font-[600] w-full text-start text-black cursor-pointer'>Categorías</h4>
            <div className="items-center gap-2 hidden sm:flex">
              <h3 className="text-xl font-medium cursor-pointer">Inicio</h3>
              <ChevronRight />
              <h3 className="text-xl font-medium opacity-70 cursor-pointer">Categorías</h3>
            </div>
          </div>
        </section>
        <section className="hidden bg-[#EBEBEB] text-black px-2 py-5 sm:px-10 sm:py-5">
          <div className="2xl:w-[90rem] xl:w-[75rem] sm:h-[27rem] w-auto mx-auto grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4">
            <div className="rounded-[8px] sm:col-span-1 sm:row-span-2 bg-blue-500 p-4 h-[10rem] sm:h-auto"><CardPost /></div>
            <div className="rounded-[8px] sm:col-span-2 sm:row-span-1 bg-green-500 p-4 h-[10rem] sm:h-auto"><CardPost /></div>
            <div className="rounded-[8px] bg-yellow-500 p-4 h-[10rem] sm:h-auto"><CardPost /></div>
            <div className="rounded-[8px] bg-purple-500 p-4 h-[10rem] sm:h-auto"><CardPost /></div>
          </div>
        </section>
        <section className="px-2 py-5 sm:px-10 sm:py-5 bg-[#EBEBEB]">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto gap-4 flex flex-col sm:flex-row items-center">
            <div className="sm:w-[24rem] sm:h-[39rem] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Oferta especial</h4>
              <CardProduct />
            </div>
            <div className="sm:w-[80%] min-h-[39rem] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Mas pedidos</h4>
              <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
                {GetData("Mas_pedidos").documents.map(item => (
                  <CardProduct tate={2} item={item}/>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="px-2 py-5 sm:px-10 sm:py-5 bg-[#EBEBEB]">
          <div className="flex flex-col 2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto gap-4">
            <div className="min-h-[39rem] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Aceite esencial</h4>
              <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
                {GetData("Aceite_esencial").documents.map(item => (
                  <CardProduct tate={2} item={item}/>
                ))}
              </div>
            </div>
            <div className="min-h-[39rem] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Aceite</h4>
              <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
              </div>
            </div>
            <div className="min-h-[39rem] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
              <h4 className='text-[20px] font-[600] w-full text-start text-black'>Extracto</h4>
              <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
                <CardProduct tate={2} />
              </div>
            </div>
            <div className="min-h-[39rem] flex flex-col p-4 gap-2 rounded-[8px] border bg-white">
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
        </section>
      </main>
    </>
  );
}
