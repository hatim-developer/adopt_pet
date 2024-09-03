import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: "",
    location: "",
    breeds: "",
  });

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const result = useQuery(["search", requestParams], fetchSearch);
  const pets = result?.data?.pets;

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          setRequestParams({
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          });
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="location"
        />

        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          name="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option />

          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select id="breed" name="breed" disabled={breeds.length === 0}>
          <option />

          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
