import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { setGameByName } from "../../Redux/actions";
import style from'./SearchBar.module.css'

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
    <div className={style.searchcontainer}>
      <input
        type="search"
        placeholder="Search Game"
        onChange={inputHandler}
        value={gameName}
        className={style.inputsearch}
      ></input>
      <button className={style.searchbtn} onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
