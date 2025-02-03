function AddIncomeCategory() {
  return (
    <form action="/SubmitNewIncomeStream" id="SubmitNewIncomeStreamForm" className="SubmitNewCategoryForm">
      <div id="newIncomeInputDiv">
        <label htmlFor="newIncomeName">New Income stream name :</label>
        <input type="text" name="newIncomeName" id="newIncomeNameInput" className="SubmitNewCategoryFormInput" />
      </div>
      <div style={{justifyContent:"flex-end"}}>
        <input
          type="button"
          className="SubmitNewCategoryButton"
          value="Submit New Income Stream"
          id="newIncomeSubmitBtn"
        />
      </div>
    </form>
  );
}
export default AddIncomeCategory;
