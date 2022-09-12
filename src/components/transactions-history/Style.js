import styled from "styled-components";

const Transactions = styled.div`
    height: calc(100vh - 26px - 50px - 114px - 26px);

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 25px 0 20px 0;
`

const EachTransaction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const LineTransaction = styled.span`
    display: flex;

    margin: 8px 0;

    p {
        font-size: 16px;
    }

    p:nth-child(1) {
        color: #C6C6C6;
    }

    p:nth-child(2) {
        color: #000000;
    }

`

const Total = styled.div`
    background-color: aliceblue;
    display: flex;

    p:nth-child(1) {
        color: #000000;
        font-size: 17px;
        font-weight: bold;
    }
`


export { Transactions, EachTransaction, LineTransaction, Total };