import { Transactions } from "./Style";

export default function TransactionsHistory( { cashIn, cashOut } ) {
    function total() {
        const eachCashIn = cashIn.map((item) => Number(item.value)); 
        let countCashIn = 0;
        eachCashIn.forEach((x) => { console.log( countCashIn += x)});

        const eachCashOut = cashOut.map((item) => Number(item.value)); 
        let countCashOut = 0;
        eachCashOut.forEach((x) => { console.log( countCashOut += x)});
        
        const totalCashInAndOut = (countCashIn - countCashOut).toFixed(2);
        return totalCashInAndOut;
    };

    return (
        <Transactions>
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
                <p>{total()}</p>
            </span>
        </Transactions>
    )
}