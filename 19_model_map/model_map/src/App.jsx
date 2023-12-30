import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let foodItems = ["Item-1", "Item-2", "Item-3", "Item-4"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((iteam) => (
          <li key={iteam} className="list-group-item">
            {iteam}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
