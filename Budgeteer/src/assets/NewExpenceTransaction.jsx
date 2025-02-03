function NewExpenceTransaction() {
    const subCategories = ["Coffee","Groceries","..."];
    const subCategoriesHTML = subCategories.map((sCtg)=>{
        return <option value={sCtg} key ={sCtg}>{sCtg}</option>
    })
    return(
        <div id="NewExpenceTransactionDiv"style={{margin:"0px",padding:"0px",}}>
            <label htmlFor="NewExpenceTransactionAmountInput">Amount :</label>
            <input type="number" 
                name="NewExpenceTransactionAmountInput" 
                id="NewExpenceTransactionAmountInput"
                className="SubmitNewCategoryFormInput"/>    
            
            <label htmlFor="NewExpenceTransactionNecessityInput">Necessity </label>
            <select name="NewExpenceTransactionNecessityInput" id="NewExpenceTransactionNecessityInput" className ="SubmitNewCategoryFormInput">
                    <option value="Necessary">Necessary</option>
                    <option value="Luxury">Luxury</option>
                </select>  
            
            <label htmlFor="NewExpenceTransactionSubCategoryInput">Sub-Category </label>
            <select name="NewExpenceTransactionSubCategoryInput" id="NewExpenceTransactionSubCategoryInput" className ="SubmitNewCategoryFormInput">
                {subCategoriesHTML}
            </select>  
            
            <label htmlFor="NewExpenceTransactionDescriptionInput">Description</label>
            <input type="text" 
                name="NewExpenceTransactionDescriptionInput" 
                id="NewExpenceTransactionDescriptionInput"
                className="SubmitNewCategoryFormInput"
                style={{textAlign:"left",paddingLeft:"10px"}}/>    
            
            
            <input
                    type="button"
                    className="SubmitNewCategoryButton"
                    value="Submit"
                    id="newExpenceTransactionSubmitBtn"
                    style={{
                        gridColumnStart:"2"}}
            />
            <br />
        </div>
    );
}

export default NewExpenceTransaction;