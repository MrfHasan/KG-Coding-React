function TodoItem1() {
  let todoName = "Eat Kebab";
  let todoDate = "28/12/2023";

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

export default TodoItem1;
