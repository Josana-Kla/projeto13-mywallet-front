import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ( { children } ) => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const login = (response) => {
        console.log("login auth", {});

        localStorage.setItem("mywallet", JSON.stringify(response));
        
        navigate("/home");
    };

    /* const logout = () => {
        console.log("logout");
        localStorage.clear("trackit");
        navigate("/");
    }; */

    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, setUser, login,  /*logout */ }}>
            {children}
        </AuthContext.Provider>
    )
}