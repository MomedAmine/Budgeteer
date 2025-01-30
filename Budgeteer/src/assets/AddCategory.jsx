import { useState } from "react";
import AddExpenceCategory from "./AddExpenceCategory";
import AddIncomeCategory from "./AddIncomeCategory";

function AddCategory(props) {
  const [InOut, setInOut] = useState(true);
  const changeInOut = (bool) => {
    setInOut(bool);
  };
  return (  
    <div id="addCategoryContainer">
      <div id ="AddIncomeDiv" className="AddCategoryDiv">
        <div id="AddIncomeHead" className="AddCategoryHead" onClick={()=>changeInOut(true)}>
          <h3> INCOME </h3>
        </div>
        <div id="AddIncomeForm" style={{transition:"0.5s",overflow :"hidden",width:"100%",height : InOut?"150px":"0px",}}>
          <AddIncomeCategory/>
        </div>
      </div>
      <div id ="AddExpenseDiv" className="AddCategoryDiv">
        <div id="AddExpenceHead" className="AddCategoryHead" onClick={()=>changeInOut(false)}>
          <h3> EXPENCE </h3>
        </div>
        <div id="AddIncomeForm" style={{transition:"0.5s",overflow :"hidden",width:"100%",height : InOut?"0px":"250px",}}>
          <AddExpenceCategory/>
        </div>
      </div>
    </div>
  );
}
export default AddCategory;
