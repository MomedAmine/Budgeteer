import AddCategory from "./AddCategory";
function Welcome() {
  const name = "Mohamed";

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
            <button> New Category </button>
            <button> New Action </button>
            <button> Review Finances </button>
          </div>
        </div>
      </div>
      <div id="actionDiv">
        <AddCategory />
      </div>
    </div>
  );
}

export default Welcome;
