import { useState } from "react";


const List = ({ allPeople }) => {

  const [people, setPeople] = useState(people);

  const removePeople = () => {
      setPeople((current) =>
      current.filter((people) => people!== people)
    );
  }

  return (
    <>
      {allPeople && allPeople.length ? (
        <ol>
          {allPeople.map((people, index) => (
            <li key={index}> 
              {people} 
              <button 
                style={{backgroundColor: 'red'}} 
                type="button"
                onClick={removePeople}
              >
                remove 
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <h6> No people found </h6>
      )}
    </>
  );
};

export default List;
