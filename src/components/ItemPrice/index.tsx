import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

const ItemPrice = ({selectedValue, setSelectedValue}:{
    //@ts-ignore
    setSelectedValue: any,
    selectedValue:number
}) => {

    const handleChange = (value:number) => {
        setSelectedValue(value)
        console.log(selectedValue, value)
    }

    return (
        <ToggleGroup type="single" className='grid sm:grid-cols-3 grid-cols-2 sm:w-[35rem] w-[20rem] mx-auto'>
            <ToggleGroupItem value="16.000" aria-label="Toggle bold" onClick={() => handleChange(16.000)}>
                <div className={`cursor-pointer flex items-center justify-center gap-3 px-5 py-2 rounded-[20px]`}>
                    <span className='sm:text-[1.2rem] font-normal'>30ML</span>
                    <span className='sm:text-[1.2rem] text-[#1c1c1c] font-extralight'>$16.000</span>
                </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="32.000" aria-label="Toggle italic" onClick={() => handleChange(32.000)}>
                <div className={`cursor-pointer flex items-center justify-center gap-3 px-5 py-2 rounded-[20px]`}>
                    <span className='sm:text-[1.2rem] font-normal'>60ML</span>
                    <span className='sm:text-[1.2rem] text-[#1c1c1c] font-extralight'>$32.000</span>
                </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="64.000" aria-label="Toggle underline" onClick={() => handleChange(64.000)}>
                <div className={`cursor-pointer flex items-center justify-center gap-3 px-5 py-2 rounded-[20px]`}>
                    <span className='sm:text-[1.2rem] font-normal'>120ML</span>
                    <span className='sm:text-[1.2rem] text-[#1c1c1c] font-extralight'>$64.000</span>
                </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="133.333" aria-label="Toggle bold" onClick={() => handleChange(133.333)}>
                <div className={`cursor-pointer flex items-center justify-center gap-3 px-5 py-2 rounded-[20px]`}>
                    <span className='sm:text-[1.2rem] font-normal'>250ML</span>
                    <span className='sm:text-[1.2rem] text-[#1c1c1c] font-extralight'>$133.333</span>
                </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="266.667" aria-label="Toggle italic" onClick={() => handleChange(266.667)}>
                <div className={`cursor-pointer flex items-center justify-center gap-3 px-5 py-2 rounded-[20px]`}>
                    <span className='sm:text-[1.2rem] font-normal'>500ML</span>
                    <span className='sm:text-[1.2rem] text-[#1c1c1c] font-extralight'>$266.667</span>
                </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="533.333" aria-label="Toggle underline" onClick={() => handleChange(533.333)}>
                <div className={`cursor-pointer flex items-center justify-center gap-3 px-5 py-2 rounded-[20px]`}>
                    <span className='sm:text-[1.2rem] font-normal'>1000ML</span>
                    <span className='sm:text-[1.2rem] text-[#1c1c1c] font-extralight'>$533.333</span>
                </div>
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

export default ItemPrice