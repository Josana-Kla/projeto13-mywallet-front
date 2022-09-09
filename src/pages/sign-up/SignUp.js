import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";

import { signUp } from "../../services/api/axios";

import { Background, Content, LoginForm } from "../LoginStyle";

export default function SignUp() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ checkPassword, setCheckPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();

        const body = {
            name: name,
            email: email,
            password: password,
            checkPassword: checkPassword
        };

        setLoading(true);

        signUp(body)
        .then((res) => {
            console.log("sucesso");
            console.log(res.data);

            resetForm();
            navigate("/");
            })
        .catch((error) => {
            alert("error");
            console.log(error);

            setLoading(false);
            resetForm();
        });
    }

    function resetForm() {
        setName("");
        setEmail("");
        setPassword("");
        setCheckPassword("");
    }

    return (
        <Background>
            <Content>
                <h1>MyWallet</h1>
                <LoginForm onSubmit={handleForm}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" pattern=".{2,}" title="Dois ou mais caracteres" required disabled={loading} />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required disabled={loading} />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" pattern=".{8,}" title="Oito ou mais caracteres" required disabled={loading} />
                    <input type="password" value={checkPassword} onChange={e => setCheckPassword(e.target.value)} placeholder="Confirme a senha" pattern=".{8,}" title="Oito ou mais caracteres" required disabled={loading} />
                    {loading ? (
                        <button type="submit" disabled={loading} >
                            <ThreeDots color="#FFFFFF" height={80} width={80} />
                        </button>
                    ) : (
                        <button type="submit">Cadastrar</button>
                    )}
                </LoginForm>

                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </Content>
        </Background>
    )
}