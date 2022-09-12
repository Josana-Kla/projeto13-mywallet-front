import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ( { children } ) => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);

    const login = (response) => {
        console.log("login auth", {});
        localStorage.setItem("mywallet", JSON.stringify(response));
        navigate("/home");
    };

    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, setUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}