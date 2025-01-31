import { useState } from "react";
import AddCategory from "./AddCategory";
import NewAction from "./NewAction";
function Welcome() {
  const name = "Mohamed";
  const newAction = <NewAction/>
  const addCategory = <AddCategory/>
  const [action,setAction] = useState(addCategory)

  return (
    <div id="actionContainer">
      <div id="welcomeContainer">
        <div id="welcomeDiv">
          <div>
            <br />
            <h2>
              Welcome back <b className="userName">{name}</b>,
            </h2>
            <p>What are you looking to do today ?</p>
          </div>
          <div id="btnContainer">
            <button onClick={()=>setAction(addCategory)}> New Category </button>
            <button onClick={()=>setAction(newAction)}> New Action </button>
            <button> Review Finances </button>
          </div>
        </div>
      </div>
      <div id="actionDiv">
        {action}
      </div>
    </div>
  );
}

export default Welcome;
