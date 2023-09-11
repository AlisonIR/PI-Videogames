import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllGames, setCurrentPage } from '../../Redux/actions';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import style from './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const gamesResponse = useSelector((state) => state.allGames);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    dispatch(setAllGames());
  }, [dispatch]);

  useEffect(() => {
    setIsContentLoaded(gamesResponse.length > 0);
  }, [gamesResponse]);

  // Calcula el rango de juegos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGames = gamesResponse.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div className={style.container}>
      {isContentLoaded ? (
        <div className={style.cardsContainer}>
          {currentGames.map((game) => (
            <Card
              key={game?.id}
              id={game?.id}
              name={game?.name}
              img={game?.img}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}

      {isContentLoaded && (
        <div className={style.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={style.paginationbtn}
          >
            Previous
          </button>
          <h1 className={style.page}>{currentPage}</h1>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentGames.length < itemsPerPage}
            className={style.paginationbtn}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;