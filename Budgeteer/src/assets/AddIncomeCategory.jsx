function AddIncomeCategory() {
  return (
    <form action="/SubmitNewIncomeStream" id="SubmitNewIncomeStreamForm">
      <div id="newIncomeInputDiv">
        <label htmlFor="newIncomeName">New Income stream name :</label>
        <input type="text" name="newIncomeName" id="newIncomeNameInput" />
      </div>
      <input
        type="button"
        value="SubmitNewIncomeStream"
        id="newIncomeSubmitBtn"
      />
    </form>
  );
}
export default AddIncomeCategory;
