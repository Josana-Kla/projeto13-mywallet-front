import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 13px;

    height: calc(100vh - 50px);
    margin: 25px;
`
const WelcomeUser = styled.span`
    display: flex;
    justify-content: space-between;

    color: #FFFFFF;

    h1 {
        font-size: 26px;
        font-weight: bold;
    }
`

const TransactionsList = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    border: none;

    display: flex;
    flex-direction: column;

    height: 100%;

    p {
        font-size: 20px;
        text-align: center;
        align-self: center;
        margin: auto;

        width: 180px;
    }
`

const ToTransactionsPage = styled.span`
    display: flex;
    justify-content: space-between;
    gap: 5px;

    button {
        background-color: #A328D6;
        border: none;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 114px;
        width: 156px;

        padding: 10px;

        color: #FFFFFF;
    }

    button h2 {
        font-size: 17px;
        font-weight: bold;
        text-align: left;

        width: 50%;
    }
`



export { Main, WelcomeUser, TransactionsList, ToTransactionsPage };