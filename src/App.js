import "./App.css";
import AddList from "./pages/AddList";
import List from "./pages/List";

function App() {
  return (
    <>
      <div
        style={{
          float: "left",
          width: "49%",
          borderRight: "1px solid #ccc",
          padding: "10",
          textAlign: "center",
        }}
      >
        <AddList />
      </div>
      <div
        style={{
          float: "left",
          width: "49%",
          borderRight: "1px solid #ccc",
          padding: "10",
          textAlign: "center",
        }}
      >
        <List />
      </div>
    </>
  );
}

export default App;
