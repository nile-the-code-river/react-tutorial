import { useState } from "react";
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function InputBox({label, onInputChange}){
    // lift up the state

    return <div>
        <p  className="input-group">
            <label>{label}</label>
            <input type="number" onChange={onInputChange} />
        </p>
    </div>
}