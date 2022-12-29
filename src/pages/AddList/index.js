import { useState } from "react";

const AddList = () => {
  const [name, setName] = useState("");

  const enterName = (e) => {
    setName(e.target.value);
  };

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
      <button style={{ background: "yellow" }} disabled={!name}>
        Add People
      </button>
    </>
  );
};

export default AddList;
