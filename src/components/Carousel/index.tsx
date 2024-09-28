import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import carrucell from "../../assets/carrucel1.png"
import carrucellMobil from "../../assets/Carru.png"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const CarouselComponent = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-full max-h-full"
            onMouseEnter={() => {
                plugin.current.stop
            }}
            onMouseLeave={() => {
                plugin.current.play
            }}
        >
            <CarouselContent className="h-full max-h-full">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="h-full">
                            <Card className="h-full">
                                <CardContent className="px-0 py-0 w-full h-full flex aspect-square items-center justify-center">
                                <Image src={carrucell} className="hidden sm:block w-full h-full" width={4000} height={4000} alt="Logo de naturchem"/>
                                <Image src={carrucellMobil} className="block sm:hidden w-full h-full" width={4000} height={4000} alt="Logo de naturchem"/>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselComponent