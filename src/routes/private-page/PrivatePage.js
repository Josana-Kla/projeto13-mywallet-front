import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/Auth";

export default function PrivatePage( { children } ) {
    const { authenticated } = useContext(AuthContext);
    const userToken = JSON.parse(localStorage.getItem("mywallet"));

    if (!authenticated && !userToken) {
        return <Navigate to="/" />;
    } else {
        return (
            <>
              {children}
            </>
          );
    }
}