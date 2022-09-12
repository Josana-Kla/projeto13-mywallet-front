import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCashIn } from "../../services/api/axios";

export default function CashIn() {
    const navigate = useNavigate();
    const [ value, setValue ] = useState("");
    const [ description, setDescription ] = useState("");

    function handleForm(event) {
        event.preventDefault();

        const body = {
            value: value,
            description: description
        };

        if(value > 0 && description.length > 0) {
            console.log(body);
            addCashIn(body)
            .then((res) => {
                console.log(res.data);
                console.log("sucesso");
                navigate("/home");
            })
            .catch((res) => {
                alert("error:" + res.message);
            });
        }; 
    }

    return (
        <div>
            <h1>Nova entrada</h1>
            <form onSubmit={handleForm}>
                <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Valor" min="0" pattern="^R\$([1-9]\d{0,2}((\.\d{3})*|\d*))(\,\d{2})?$" required />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" pattern=".{2,}" title="Dois ou mais caracteres" required />
                <button>Salvar entrada</button>
            </form>
        </div>
    )
}