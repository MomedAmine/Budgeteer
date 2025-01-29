import { useState } from "react";
import AddExpenceCategory from "./AddExpenceCategory";
import AddIncomeCategory from "./AddIncomeCategory";

function AddCategory(props) {
  const [InOut, setInOut] = useState(false);
  const changeInOut = () => {
    setInOut(!InOut);
  };
  return (
    <div id="addCategoryContainer">
      <div id="InOutDiv">
        <div id="InOutlabels" onClick={changeInOut}>
          <label
            style={{
              borderStyle: "solid",
              /*InOut ? "solid solid none solid" : "none"*/
              borderRadius: "25px 0px 0px 0px",
              borderColor: InOut
                ? "black black transparent black"
                : "transparent transparent black transparent",
            }}
          >
            Income
          </label>
          <input
            type="checkbox"
            name="InOutCheckBox"
            id="InOutCheckBox"
            checked={InOut}
          />
          <label
            style={{
              borderStyle: "solid",
              borderRadius: " 0px 25px 0px 0px",
              borderColor: !InOut
                ? "black black transparent black"
                : "transparent transparent black transparent",
            }}
          >
            Expence
          </label>
        </div>
        <div id="addCategoryFormDiv">
          {InOut ? <AddIncomeCategory /> : <AddExpenceCategory />}
        </div>
      </div>
    </div>
  );
}
export default AddCategory;
