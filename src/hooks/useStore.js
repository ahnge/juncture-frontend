import {  useContext } from "react"
import { Store } from "../Context/Store"

export const useStore = () =>{
    const context = useContext(Store)

    if(!context) {
        throw Error('useStore  must be inside storeProvider')
    }

    return context;
}
