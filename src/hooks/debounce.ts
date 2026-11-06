import { useEffect, useState } from "react";

const useDebounce = (searchKeyword: string, debounceValue: number, //callback: () => void
): string => {

    const [debounceSearchKeyword, setDebounceSearchKeyword] = useState("");

    useEffect(() => {

        const timer = setTimeout(() => {
            //callback();
            setDebounceSearchKeyword(searchKeyword);
        }, debounceValue)
        return () => {
            clearTimeout(timer)
        }

    }, [searchKeyword])

    return debounceSearchKeyword;
}

export default useDebounce;