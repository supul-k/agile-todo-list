import { useState } from "react";

const AddList = ({setAllPeople,allPeople}) => {
  const [name, setName] = useState("");

  const enterName = (e) => {
    setName(e.target.value);
  };

  const setPeople = () => {
    setAllPeople([...allPeople, name]);
    setName('');
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={enterName}
      />
      <br />
      <br />
      <button 
            style={{ background: "yellow" }}
            disabled={!name}
            onClick={setPeople}        >
        Add People
      </button>
    </>
  );
};

export default AddList;
