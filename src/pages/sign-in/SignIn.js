import { Link } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from  'react-loader-spinner';

import { signIn } from "../../services/api/axios";
import { Background, Content, LoginForm } from "../LoginStyle";

export default function SignIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    function handleForm(event) {
        event.preventDefault();

        const body = {
            email: email,
            password: password
        }

        setLoading(true);

        signIn(body)
        .then((res) => {
            console.log(res);
            
            console.log("sucesso");
            })
        .catch((error) => {
            alert("error");
            console.log(error);
            setLoading(false);
            resetForm();
        });
    };

    function resetForm() {
        setEmail("");
        setPassword("");
    };

    return (
        <Background>
            <Content>
                <h1>MyWallet</h1>
                <LoginForm onSubmit={handleForm}>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required disabled={loading} />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" pattern=".{8,}" title="Oito ou mais caracteres" required disabled={loading} />
                    {loading ? (
                        <button type="submit" disabled={loading} >
                            <ThreeDots color="#FFFFFF" height={50} width={50} />
                        </button>
                    ) : (
                        <button type="submit">Entrar</button>
                    )}
                </LoginForm>
                
                <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
            </Content>
        </Background>
    )
}