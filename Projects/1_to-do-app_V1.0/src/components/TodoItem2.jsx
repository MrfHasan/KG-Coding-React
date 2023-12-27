function TodoItem2() {
  let todoName = "Go for Walk";
  let todoDate = "29/12/2023";

  return (
    <div class="conatainer">
      <div class="row mh-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger  mh-button">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
