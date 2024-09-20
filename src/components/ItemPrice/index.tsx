import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

const ItemPrice = ({setSelectedValue, productPrice}:{
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
    selectedValue:string,
    productPrice:  {    
        [key: string]: string;
      };
}) => {

    const handleChange = (value:string) => {
        console.log(value)
        setSelectedValue(value)
    }
    function removeDecimalPoints(input:string) {
        // Verificación inicial
        if (typeof input !== 'string') {
          throw new Error('El input debe ser una cadena de caracteres.');
        }
      
        // Elimina todos los puntos del string
        const cleanString = input.replace(/\./g, '');
      
        // Convierte el string limpio a un número entero
        const result = parseInt(cleanString, 10);
      
        return result;
      }
    return (
        <ToggleGroup type="single" className='grid sm:grid-cols-3 grid-cols-2 sm:w-[35rem] w-[20rem] mx-auto'>
             {Object.entries(productPrice || {}).map(([key, value]: string[]) => (
                        // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
                        <ToggleGroupItem value={value} aria-label="Toggle bold" key={key} onClick={() => handleChange(removeDecimalPoints(value))}>
                        <div className={`cursor-pointer flex items-center justify-center gap-3 px-5 py-2 rounded-[20px]`}>
                            <span className='sm:text-[1.2rem] font-normal'>{key}</span>
                            <span className='sm:text-[1.2rem] text-[#1c1c1c] font-extralight'>{value}</span>
                        </div>
                    </ToggleGroupItem>
                    ))}
        </ToggleGroup>
    )
}

export default ItemPrice