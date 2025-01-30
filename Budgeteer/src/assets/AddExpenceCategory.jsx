function AddExpenceCategory() {
  return (
  <form action="/SubmitNewExpenceStream" id="SubmitNewExpenceStreamForm" className="SubmitNewCategoryForm">
    <div>
      <label htmlFor="newExpenceName">New Expence Category name :</label>
      <input type="text" name="newExpenceName" id="newExpenceNameInput" className="SubmitNewCategoryFormInput" />
    </div>
    <div>
      <label htmlFor="newExpenceNecessity">Necessity :</label>
      <select name="newExpenceNecessity" id="newExpenceNecessity" className="SubmitNewCategoryFormInput">
        <option value="Necessary">Necessary</option>
        <option value="Luxury">Luxury</option>
      </select>
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
