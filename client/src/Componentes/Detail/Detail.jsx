import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameById } from '../../Redux/actions';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import style from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  const game = useSelector((state) => state.gameById);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(setGameById(id));
    const reset = () => {
      dispatch(setGameById("reset"))
    }
    return reset();
  }, [id, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Verifica si game.parent_platforms está definido antes de mapearlo


  return (
    <section className={style.detailsection}>
      {game.id && (
        <div className={style.detailcontainer}>
          <div className={style.detailbox}>
            <img className={style.detailimage} src={game.background_image} alt={game.name} />
            <h2>{game.genres && game.genres.map((genre) => genre.name).join(', ')}</h2>
            <div className={style.titles}>
              <h1>{game.name}</h1>
              <h2>{game.released}, rating: {game.rating}</h2>
            </div>
            <h2>ID: {game.id}</h2>
            <p className={style.detaildescription}>{game.description_raw}</p>
            {/* Mostrar los nombres de las plataformas */}
            <h2>Plataformas: {game.platforms}</h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;





