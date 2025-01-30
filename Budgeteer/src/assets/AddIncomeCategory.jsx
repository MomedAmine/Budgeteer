function AddIncomeCategory() {
  return (
    <form action="/SubmitNewIncomeStream" id="SubmitNewIncomeStreamForm" className="SubmitNewCategoryForm">
      <div id="newIncomeInputDiv">
        <label htmlFor="newIncomeName">New Income stream name :</label>
        <input type="text" name="newIncomeName" id="newIncomeNameInput" className="SubmitNewCategoryFormInput" />
      </div>
      <input
        type="button"
        className="SubmitNewCategoryButton"
        value="Submit New Income Stream"
        id="newIncomeSubmitBtn"
      />
    </form>
  );
}
export default AddIncomeCategory;
