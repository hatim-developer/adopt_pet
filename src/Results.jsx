import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets?.length ? (
        <h1>No Pets Found!</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
          />
        ))
      )}
    </div>
  );
};

export default Results;
