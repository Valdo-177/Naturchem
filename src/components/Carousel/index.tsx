import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { IBanners } from "@/src/models/models.type"

interface ICarouselComponent {
    Banners: IBanners[]
}

const CarouselComponent = ({ Banners }:ICarouselComponent) => {
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
                {Banners.map((item, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="h-full">
                            <Link href={item.url}>
                                <Card className="h-full">
                                    <CardContent className="px-0 py-0 w-full h-full flex aspect-square items-center justify-center">
                                        <Image src={item.img} className="hidden sm:block w-full h-full object-cover" width={4000} height={4000} alt="Logo de naturchem" />
                                        {/* <Image src={carrucellMobil} className="block sm:hidden w-full h-full" width={4000} height={4000} alt="Logo de naturchem"/> */}
                                    </CardContent>
                                </Card>
                            </Link>
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