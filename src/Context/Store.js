import { createContext, useReducer } from "react";



export const Store = createContext();

export const storeReducer = (state , action) => {
    switch (action.type){
        case  "LOGIN":
            return { ...state ,user: action.payload}
        case "LOGOUT":
            return { ...state , user : null }
        case  "TOKEN":
            return {...state , Authtoken : action.payload}
        default : 
            return state;
    }
}


export const StoreContextProvider= ({children}) => {
    const [state , dispatch] = useReducer(storeReducer , {
        user : null,
        Authtoken : null

    } )

    return (
        <Store.Provider value={{...state , dispatch}}>
            {children}
        </Store.Provider>
    )
} 
