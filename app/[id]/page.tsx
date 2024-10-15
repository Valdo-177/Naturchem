"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import ItemPrice from '@/src/components/ItemPrice'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { GetProduct } from '@/src/Hooks/GetProduct'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface ProductType {
  nombre: string;
  descripcion: string;
  codigo: string;
  imagen: string;
  Precios: {
    [key: string]: string;
  };
  id: string;
  productPrice: string[];
  tamaño: string
}

const Products = () => {
  const path = useParams()
  const router = useRouter()
  const [counter, setCounter] = useState<number>(1)
  const [selectedValue, setSelectedValue] = useState<string>("")
  // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
  const { product } = GetProduct(path.id)
  const valoorPrice = selectedValue.split('/')

  const addCounter = (date: string) => {
    if (date === '+') {
      setCounter(prevCounter => prevCounter + 1)
    } else {
      if (counter > 0) {
        setCounter(prevCounter => prevCounter - 1)
      }
    }
  }

  const setLocalData = () => {
    try {
      const dataOld = JSON.parse(localStorage.getItem("product") || '[]');

      // Verificar existencia de product antes de acceder a sus propiedades
      if (!product) throw new Error('No existe el producto');

      const existingProductIndex = dataOld.findIndex((p: ProductType) => p.nombre === product.nombre && p.tamaño === valoorPrice[1]);

      if (existingProductIndex !== -1) {
        // Si el producto existe con el mismo tamaño, sumar cantidades y mezclar propiedades
        dataOld[existingProductIndex] = {
          ...dataOld[existingProductIndex],
          cantidad: (dataOld[existingProductIndex].cantidad || 0) + counter,
          precio: (dataOld[existingProductIndex].precio || 0) + counter * parseInt(valoorPrice[0]), // Sumar precios
          imagen: product.imagen,
          tamaño: valoorPrice[1],
          precioUni: parseInt(valoorPrice[0])
        };
      } else {
        // Si el producto no existe o tiene un tamaño diferente, agregarlo al final del arreglo
        dataOld.push({
          nombre: product.nombre,
          descripcion: product.descripcion,
          codigo: product.codigo,
          precio: counter * parseInt(valoorPrice[0]),
          imagen: product.imagen,
          cantidad: counter,
          tamaño: valoorPrice[1],
          precioUni: parseInt(valoorPrice[0])
        });
      }

      localStorage.setItem("product", JSON.stringify(dataOld));

      return dataOld;

    } catch (error) {
      console.error('Error al actualizar datos locales:', error);
      return null;
    }
  };
  // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
  const cantidad_minima = Object.keys(product.Precios).some(key => /precio/i.test(key)) && ',cantidad minima al por mayor: 20Kg'

  return (
    <>
      <section className="bg-white text-black px-5 py-5 sm:px-10 sm:py-5">
        <div className="2xl:w-[90rem] xl:w-[75rem] gap-10 w-auto mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className='relative sm:h-[30rem] sm:w-[40rem] w-full rounded-[8px] overflow-hidden'>
            <Image className='w-[100%] h-[100%] object-cover' src={product?.imagen ?? ''} width={500} height={500} alt='' />
          </div>
          <div className='gap-3 w-full sm:w-[53%] flex flex-col items-start'>
            <span className='text-[0.7rem] sm:text-[0.8rem]'>{product?.codigo}</span>
            <h4 className='text-[25px] font-[600] w-full text-start text-black cursor-pointer'>{product?.nombre}</h4>
            <p className={`text-[#000000e6] sm:text-[1rem] text-[15px] font-light overflow-hidden sm:w-[30rem]`} >{product?.descripcion}</p>
            <p className={`text-[#000000e6] sm:text-[1rem] text-[12px] font-normal overflow-hidden sm:w-[30rem]`} >Selecciona la presentacion del producto {cantidad_minima}</p>
            <div className='flex items-center justify-center w-full sm:w-auto mt-3'>
              <ItemPrice selectedValue={selectedValue} setSelectedValue={setSelectedValue} productPrice={product?.Precios || { "": "" }} />
            </div>
            <div className='mt-5 flex items-center justify-between sm:justify-normal gap-3 w-full sm:w-auto'>
              <Button className='bg-fondo hover:bg-[#738308] p-5' onClick={() => {
                if (selectedValue.length == 0) {
                  toast("Selecciona una presetacion por favor")
                } else {
                  setLocalData()
                  toast("Producto agregado al pedido", {
                    description: `${product?.nombre} x ${counter}`,
                    action: {
                      label: "Ver pedido",
                      onClick: () => router.push("/car"),
                    },
                  })
                }
              }}>agregar al pedido</Button>
              <Button className='bg-[#EBEBEB] hover:bg-[#EBEBEB] text-black' onClick={() => addCounter('+')}><Plus size={18} /></Button>
              {counter}
              <Button className='bg-[#EBEBEB] hover:bg-[#EBEBEB] text-black' onClick={() => addCounter('-')}><Minus size={18} /></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
