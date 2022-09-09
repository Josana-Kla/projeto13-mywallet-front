import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./assets/css/GlobalStyle";

import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Home from "./pages/home/Home";

import PrivatePage from "./routes/private-page/PrivatePage";


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />


                <Route 
                path="/home" 
                element={
                    <PrivatePage>
                        <Home />
                    </PrivatePage>
                } />

            </Routes>
        </BrowserRouter>
    )
}