import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;

    height: calc(100vh - 50px);
    margin: 25px;

    h1 {
        color: #FFFFFF;
        font-size: 26px;
        font-weight: bold;
    }
`
const FormCash = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 13px;

    input {
        border-radius: 5px;
        border: none;

        padding-left: 13px;

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

        height: 46px;

        color: #FFFFFF;
        font-size: 20px;
        font-weight: bold;
    }
`

export { Main, FormCash }