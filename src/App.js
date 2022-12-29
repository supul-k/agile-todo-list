import "./App.css";
import AddList from "./pages/AddList";
import List from "./pages/List";
import { useState } from "react";

function App() {

  const[allPeople, setAllPeople] = useState([]);

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
        <AddList allPeople={allPeople}  setAllPeople={setAllPeople}/>
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
        <List allPeople={allPeople}/>
      </div>
    </>
  );
}

export default App;
