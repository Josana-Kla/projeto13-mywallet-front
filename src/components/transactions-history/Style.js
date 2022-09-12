import styled from "styled-components";

const Transactions = styled.div`
    height: calc(100vh - 26px - 50px - 114px - 26px);

    overflow-y: scroll;
`

const ListTodayHabits = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    div {
        color: #666666;
        font-size: 18px;
    }
`

export { Transactions };