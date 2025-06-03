import { useEffect, useState } from "react"

export const useDebounce = <T>(value : T , delay= 500) =>{
    const [debouncevalue , setDebounceValue] = useState<T>(value);

    useEffect(() =>{
        const timeout = setTimeout(() =>{
            setDebounceValue(value);
        },delay)
        return () => clearTimeout(timeout);
    },
    [value,delay])

    return debouncevalue;
}