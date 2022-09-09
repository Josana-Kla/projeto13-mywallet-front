import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <span>
                <h1>Olá, Fulano</h1>
                <RiLogoutBoxRLine />
            </span>

            <div>
                //TODO: Se a quantidade de coisas dentro de histórico maior que 0
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
    return (
        <div>
            <div>
                <span>
                    <p>30/11 </p>
                    <p>Almoço mãe</p>
                    <p>39,90</p>
                </span>
                <span>
                    <p>30/11 </p>
                    <p>Almoço mãe</p>
                    <p>39,90</p>
                </span>
            </div>

            <span>
                <p>SALDO</p>
                <p>289,00</p>
            </span>
        </div>
    )
}