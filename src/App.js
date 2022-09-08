import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./assets/css/GlobalStyle";

import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import TransactionsHistory from "./pages/transactions-history/TransactionsHistory";

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
                        <TransactionsHistory />
                    </PrivatePage>
                } />

            </Routes>
        </BrowserRouter>
    )
}