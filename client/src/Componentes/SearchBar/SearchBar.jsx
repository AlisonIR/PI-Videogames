import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { setGameByName } from "../../Redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch;

  const [gameName, setGameName] = useState("");

  const inputHandler = (e) => {
    setGameName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setGameByName(gameName));
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search Game"
        onChange={inputHandler}
        value={gameName}
      ></input>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
