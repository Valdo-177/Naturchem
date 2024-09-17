"use client"
import React from 'react'
import { Check, Dot, Instagram, Mail, Menu, Phone, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import logo1 from "../../assets/isovb.svg"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useParams, useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const Nav = () => {
    const roter = useRouter()
    const {id} = useParams()
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    };
    const categorias = [
        {
            value: "Aceite esencial",
            label: "Aceite esencial",
        },
        {
            value: "Aceites",
            label: "Aceites",
        },
        {
            value: "Extractos",
            label: "Extractos",
        },
        {
            value: "Base de glicerina-ceras-parafinas",
            label: "Base de glicerina-ceras-parafinas",
        },
        {
            value: "Colorantes",
            label: "Colorantes",
        },
        {
            value: "Fragancias",
            label: "Fragancias",
        },
        {
            value: "Adictivos",
            label: "Adictivos",
        },
        {
            value: "Accesorios",
            label: "Accesorios",
        },
        {
            value: "Materia prima",
            label: "Materia prima",
        },
        {
            value: "Modelos-Envases",
            label: "Modelos-Envases",
        },
    ]

    const categoriasProduct = [
        "Aceite esencial",
        "Aceites",
        "Extractos",
        "Base de glicerina-ceras-parafinas",
        "Colorantes",
        "Fragancias",
        "Adictivos",
        "Accesorios",
        "Materia prima",
        "Modelos-Envases",
    ]

    function desencriptarCadena(cadena: any) {
        return decodeURIComponent(cadena?.replace(/%20/g, ' '));
    }

    const SidebaRoute = () => {
        return (
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <div className='p-2 md:p-6'>
                        <p className='text-slate-500 mb-2 font-medium'>CATEGORÍAS</p>
                        {categoriasProduct.map(item => (
                            <div onClick={() => handleOpenChange(false)} key={item}>
                                <Link
                                    href={`/Category/${item}`}
                                    className={cn(`flex gap-x-2 mt-2 text-black text-sm items-center rounded-lg p-2 cursor-pointer ${desencriptarCadena(id) == item && "bg-slate-300/20"}`

                                    )}
                                >
                                    <Dot className='h-5 w-5' strokeWidth={1} />
                                    {item}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Separator />

                    <div className='text-center p-6'>
                        <Button variant='outline' className='w-full flex items-center gap-3 bg-fondo hover:bg-[#738308] hover:text-white'>
                            <ShoppingCart/>
                            Ver pedido
                        </Button>
                    </div>
                </div>
                <div>
                    <footer className='mt-3 p-3 text-center text-black text-[0.8rem]'>
                        2024. Todos los derechos reservados
                    </footer>
                </div>
            </div>
        )
    }

    return (
        <>
            <header className="bg-fondo">
                <section className="hidden sm:block px-5 py-5 sm:px-10 sm:py-5">
                    <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
                        <div className="flex flex-col sm:flex-row items-center sm:gap-7 gap-3" >
                            <div className="flex items-center gap-2">
                                <Phone />
                                <p>0000000000</p>
                            </div>
                            <div className="flex items-center gap-2" >
                                <Mail />
                                <p>correodeeelos@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-center">Síguenos y no te pierdas la oportunidad de ganar descuentos</h3>
                        </div>
                        <div className="flex items-center gap-6" >
                            <p>Síguenos:</p>
                            <a href="https://www.instagram.com/naturchem.oficial/" className="flex items-center gap-2" >
                                <Instagram />
                                <p>naturchem.oficial</p>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="bg-[#EBEBEB] text-black px-5 py-5 sm:px-10 sm:py-5">
                    <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-between">
                        <Image src={logo1} width={50} height={50} alt="Logo de naturchem" onClick={() => roter.push('/')} />
                        <div className="hidden sm:flex items-center gap-2 text-fondo">
                            <ShoppingCart size={25} />
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-[200px] justify-between text-container "
                                    >
                                        {value
                                            ? categorias.find((categorias) => categorias.value === value)?.label
                                            : "Buscar categoría"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Buscar categoría..." />
                                        <CommandList>
                                            <CommandEmpty>No existe esa categoría.</CommandEmpty>
                                            <CommandGroup>
                                                {categorias.map((categorias) => (
                                                    <CommandItem
                                                        key={categorias.value}
                                                        value={categorias.value}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpen(false)
                                                            roter.push(`/Category/${currentValue}`)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                value === categorias.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        {categorias.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <Search size={25}/>
                        </div>
                        <div className='sm:hidden'>
                            <Sheet open={isOpen} onOpenChange={handleOpenChange}>
                                <SheetTrigger className="flex items-center">
                                    <Menu onClick={() => setIsOpen(true)} />
                                </SheetTrigger>
                                <SheetContent side="left" className='bg-white'>
                                    <SidebaRoute />
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Nav