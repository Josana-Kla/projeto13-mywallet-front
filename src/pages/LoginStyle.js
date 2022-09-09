import styled from "styled-components";

const Background = styled.div`
    height: 100vh;
`

const Content = styled.div`
    padding-top: 68px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
        font-size: 32px;
    }

    a {
        color: #FFFFFF;
        font-size: 15px;
        font-weight: bold;
    }
`

const LoginForm = styled.form`
    margin: 30px 0;

    display: flex;
    flex-direction: column;
    gap: 13px;

    input {
        background-color: #FFFFFF;
        border: none;
        border-radius: 5px;
        padding-left: 13px;

        width: 326px;
        height: 58px;

        color: #000000;
        font-size: 20px;
    }

    input::placeholder {
        color: #000000;
        font-size: 20px;
    }

    button {
        background-color: #A328D6;
        border-radius: 5px;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 326px;
        height: 46px;

        color: #FFFFFF;
        font-size: 20px;
        font-weight: bold;
    }
`

export { Background, Content, LoginForm }