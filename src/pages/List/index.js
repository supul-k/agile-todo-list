const List = ({ allPeople }) => {
  return (
    <>
      {allPeople && allPeople.length ? (
        <ol>
          {allPeople.map((people, index) => (
            <li key={index}> {people}</li>
          ))}
        </ol>
      ) : (
        <h6> No people found </h6>
      )}
    </>
  );
};

export default List;
