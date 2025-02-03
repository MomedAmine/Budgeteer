import { useState } from "react";
import NewExpenceTransaction from "./NewExpenceTransaction";
import NewIncomeTransaction from "./NewIncomeTransaction";

function NewAction() {
    
    // const
    const newIncomeTransaction = <NewIncomeTransaction/>
    const newExpenceTransaction = <NewExpenceTransaction/>
    const [InExp,setInExp] = useState(true)
    const handleInExpChange = () => {
        setInExp(!InExp);
      };
    
    return(
        <div style={{width:"95%",}}>
            <h3>New Transaction</h3>
            <form action="/SubmitNewTransaction" className="SubmitNewCategoryForm">
                <div id="NewTransactionType">
                    <label htmlFor="NewTransactionTypeSelect">Transaction Type :</label>
                    <select name="NewTransactionTypeSelect" id="NewTransactionTypeSelect" className="SubmitNewCategoryFormInput" onChange={handleInExpChange}>
                        <option value="Income">Income</option>
                        <option value="Expence">Expence</option>
                    </select>
                </div>
                <div className="SubmitNewCategoryForm">
                    {InExp?newIncomeTransaction:newExpenceTransaction}
                </div>
            </form>
        </div>
    );
}
export default NewAction;