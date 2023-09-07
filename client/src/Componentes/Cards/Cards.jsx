import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllGames, setCurrentPage } from '../../Redux/actions';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

const Cards = () => {
  const dispatch = useDispatch();
  const gamesResponse = useSelector((state) => state.allGames);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

  useEffect(() => {
    dispatch(setAllGames());
  }, [dispatch]);

  // Calcula el rango de juegos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGames = gamesResponse.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div className='container-two'>
      {currentGames.length > 0 ? (
        currentGames.map((game) => (
          <Card
            key={game?.id}
            id={game?.id}
            name={game?.name}
            img={game?.img}
          />
        ))
      ) : (
        <Loading />
      )}

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentGames.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;