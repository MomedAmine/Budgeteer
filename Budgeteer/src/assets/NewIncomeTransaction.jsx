function NewIncomeTransaction() {

    return(
        <div id="NewIncomeTransactionDiv"style={{margin:"0px",padding:"0px",}}>
            <div id="NewIncomeTransactionAmountDiv" style={{margin:"0px",padding:"0px",width:"100%",display:"flex"}}>
                <label htmlFor="NewIncomeTransactionAmountInput">Amount :</label>
                <input type="number" 
                name="NewIncomeTransactionAmountInput" 
                id="NewIncomeTransactionAmountInput"
                className="SubmitNewCategoryFormInput"/>    
            </div>
            <div id="NewIncomeTransactionDescriptionDiv" style={{margin:"0px",padding:"0px",width:"100%",display:"flex"}}>
                <label htmlFor="NewIncomeTransactionDescriptionInput">Description :</label>
                <input type="text" 
                name="NewIncomeTransactionDescriptionInput" 
                id="NewIncomeTransactionDescriptionInput"
                className="SubmitNewCategoryFormInput"/>    
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",width :"100%"}}>
            <input
                type="button"
                className="SubmitNewCategoryButton"
                value="Submit"
                id="newIncomeTransactionSubmitBtn"
            />
            </div>
            <br />
        </div>
    )
}

export default NewIncomeTransaction;