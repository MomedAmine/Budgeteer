function AddExpenceCategory() {
  return (
  <form action="/SubmitNewExpenceStream" id="SubmitNewExpenceStreamForm" className="SubmitNewCategoryForm">
    <div id="newExpenceInputDiv">
      <label htmlFor="newExpenceName">New Expence Category name :</label>
      <input type="text" name="newExpenceName" id="newExpenceNameInput" />
    </div>
    <input
      type="button"
      className="SubmitNewCategoryButton"
      value="Submit New Expence Stream"
      id="newExpenceSubmitBtn"
    />
  </form>);
}

export default AddExpenceCategory;
