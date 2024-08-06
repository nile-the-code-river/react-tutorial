import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Output({userInput}){
    const result = calculateInvestmentResults(userInput);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Year</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Interested Capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map(data => {
                const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                const totalAmmountInvested = data.valueEndOfYear - totalInterest;

                return <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}