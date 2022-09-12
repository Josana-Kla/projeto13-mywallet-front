import { EachTransaction, LineTransaction, Total, Transactions } from "./Style";

export default function TransactionsHistory( { cashIn, cashOut } ) {

    function total() {
        const eachCashIn = cashIn.map((item) => Number(item.value)); 
        let countCashIn = 0;
        eachCashIn.forEach((x) => { countCashIn += x});

        const eachCashOut = cashOut.map((item) => Number(item.value)); 
        let countCashOut = 0;
        eachCashOut.forEach((x) => { countCashOut += x});
        
        const totalCashInAndOut = (countCashIn - countCashOut).toFixed(2);
        return totalCashInAndOut;
    };

    return (
        <Transactions>
            <EachTransaction>
                {cashIn.map((item, index) => (
                    <LineTransaction key={index}>
                        <p>{item.date} </p>
                        <p>{item.description}</p>
                        <p className="colorCashIn">{item.value}</p>
                    </LineTransaction>
                ))}
                {cashOut.map((item, index) => (
                    <LineTransaction key={index}>
                        <p>{item.date} </p>
                        <p>{item.description}</p>
                        <p className="colorCashOut">{item.value}</p>
                    </LineTransaction>
                ))}
            </EachTransaction>

            <Total>
                <p>SALDO</p>
                {total() > 0 ? (
                    <p className="colorCashIn">{total()}</p>
                ) : (
                    <p className="colorCashOut">{total()}</p>
                )}
            </Total>
        </Transactions>
    )
}