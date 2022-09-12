import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHistory } from "../../services/api/axios";
import TransactionsHistory from "../../components/transactions-history/TransactionsHistory";
import { Main, ToTransactionsPage, TransactionsList, WelcomeUser } from "./Style";

export default function Home() {
    const [ user, setUser ] = useState("");
    const [ cashIn, setCashIn ] = useState([]);
    const [ cashOut, setCashOut ] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getHistory()
        .then((response) => {
            setCashIn(response.data.filter((item) => item.type === "cash_in"));
            setCashOut(response.data.filter((item) => item.type === "cash_out"));
            response.data.forEach((item) => {
                const userName = item.name;
                setUser(userName);
            });
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <Main>
            <WelcomeUser>
                <h1>Olá, {user}</h1>
                <div onClick={() => {
                    localStorage.clear("mywallet");
                    navigate('/')
                }}>
                    <RiLogoutBoxRLine size="24px"  />
                </div>
            </WelcomeUser>

            <TransactionsList>
                { (cashIn.length > 0 || cashOut.length > 0) ? <TransactionsHistory cashIn={cashIn} cashOut={cashOut} /> : (
                    <p>Não há registros de entrada ou saída</p>
                )}
            </TransactionsList>

            <ToTransactionsPage>
                <Link to="/cash-in">
                    <button>
                        <IoMdAddCircleOutline size="25px" />
                        <h2>Nova entrada</h2>
                    </button>
                </Link>

                <Link to="/cash-out">
                    <button>
                        <IoMdRemoveCircleOutline size="25px" />
                        <h2>Nova saída</h2>
                    </button>
                </Link>
            </ToTransactionsPage>
        </Main>
    )
}
