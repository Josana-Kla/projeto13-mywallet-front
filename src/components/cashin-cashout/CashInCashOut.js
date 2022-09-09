import { useState } from "react";

export default function CashInCashOut() {
    const [ value, setValue ] = useState();
    const [ description, setDescription ] = useState("");

    return (
        <>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Valor" min="0" pattern="^R\$([1-9]\d{0,2}((\.\d{3})*|\d*))(\,\d{2})?$" required />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" pattern=".{2,}" title="Dois ou mais caracteres" required />
        </>
    )
}