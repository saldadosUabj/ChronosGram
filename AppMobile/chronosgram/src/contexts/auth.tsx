import React, {createContext, useState, ReactNode} from "react";

interface Props {
    children?: ReactNode
}

export const AuthContext = createContext({})

function AuthProvider({children} : Props){
    return(
        <AuthContext.Provider value={{nome: "teste de contexto"}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider