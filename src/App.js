import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./assets/css/GlobalStyle";

import PrivatePage from "./routes/private-page/PrivatePage";
import { AuthProvider } from "./contexts/Auth";

import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Home from "./pages/home/Home";
import CashIn from "./pages/cash-in/CashIn";
import CashOut from "./pages/cash-out/CashOut";


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AuthProvider>
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
                    <Route 
                    path="/cash-in" 
                    element={
                        <PrivatePage>
                            <CashIn />
                        </PrivatePage>
                    } />
                    <Route 
                    path="/cash-out" 
                    element={
                        <PrivatePage>
                            <CashOut />
                        </PrivatePage>
                    } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}