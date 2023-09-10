import React, { useState, useEffect } from "react";
import {
  setByGenres,
  setOrder,
  orderCards,
  filterByGenre,
  gamesOrigin,
  setGameByName,
} from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const [order, setLocalOrder] = useState("");
  const [aux, setAux] = useState(false);
  const [filterGenres, setFilterGenres] = useState("");

  const genresResponse = useSelector((state) => state.allGenres);
  const orderChosen = useSelector((state) => state.allGames);

  useEffect(() => {
    dispatch(setByGenres());
    dispatch(setOrder(orderChosen));
  }, []);

  useEffect(() => {
    setLocalOrder(orderChosen);
  }, [orderChosen]);

  const handleSort = (e) => {
    let selector = e.target.value;
    setLocalOrder(selector);
    dispatch(setOrder(selector));
  };

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilterGenres = (e) => {
    setFilterGenres(e.target.value);
    dispatch(filterByGenre(e.target.value));
  };

  //Function that resets all filters
  const handleReset = () => {
    dispatch(setGameByName(""));
    dispatch(setFilterGenres(""));
    dispatch(orderCards(""));
    dispatch(setOrder("")); //agregar que vuelva a la pagina uno
  };

  const filterOrigin = (e) => {
    const { value } = e.target;
    dispatch(gamesOrigin(value));
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div>
          <SearchBar />
        </div>

        <div className={style.select}>
          <select className={style.filter} onChange={handleFilterGenres} value={filterGenres}>
            {genresResponse.map((genre) => {
              return <option value={genre.name}>{genre.name}</option>;
            })}
          </select>

          <select className={style.filter} value={order} onChange={handleSort}>
            {["Select order", "A-Z", "Z-A", "Best rated", "Least rated"].map(
              (orderItem, index) => (
                <option key={index} value={orderItem}>
                  {orderItem}
                </option>
              )
            )}
          </select>

          <select className={style.filter} onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Desendente</option>
          </select>

          <select className={style.filter} name="Origin" onChange={filterOrigin}>
            <optgroup key="origin" label="Origin">
            <option value="api">API</option>
            <option value="db">DB</option>
           </optgroup>
          </select>

          <button className={style.handlebtn} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default Home;
