import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHistory } from "../../services/api/axios";

export default function Home() {
    //TODO: Se a quantidade de coisas dentro de histórico maior que 0
    return (
        <div>
            <span>
                <h1>Olá, Fulano</h1>
                <RiLogoutBoxRLine />
            </span>

            <div>
                { 1===1 ? <TransactionsHistory /> : (<p>Não há registros de entrada ou saída</p>)}
            </div>

            <span>
                <Link to="/cash-in">
                    <button>
                        <IoMdAddCircleOutline />
                        <h2>Nova entrada</h2>
                    </button>
                </Link>

                <Link to="/cash-out">
                    <button>
                        <IoMdRemoveCircleOutline />
                        <h2>Nova saída</h2>
                    </button>
                </Link>
            </span>
        </div>
    )
}

function TransactionsHistory() {
    const [ cashIn, setCashIn ] = useState([]);
    const [ cashOut, setCashOut ] = useState([]);

    useEffect(() => {
        getHistory()
        .then((response) => {
            setCashIn(response.data.filter((item) => item.type === "cash_in"));
            setCashOut(response.data.filter((item) => item.type === "cash_out")); 
        })
        .catch(() => console.log("error"));
    }, []);

    return (
        <div>
            <div>
                {cashIn.map((item, index) => (
                    <span key={index}>
                        <p>{item.date} </p>
                        <p>{item.description}</p>
                        <p>{item.value}</p>
                    </span>
                ))}
                {cashOut.map((item, index) => (
                    <span key={index}>
                        <p>{item.date} </p>
                        <p>{item.description}</p>
                        <p>{item.value}</p>
                    </span>
                ))}
            </div>

            <span>
                <p>SALDO</p>
                <p>289,00</p>
            </span>
        </div>
    )
}