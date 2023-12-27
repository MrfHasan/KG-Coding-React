function AddToDo() {
  return (
    <div class="conatainer">
      <div class="row mh-row">
        <div class="col-6">
          <input type="text" placeholder="Enter to do" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success mh-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
