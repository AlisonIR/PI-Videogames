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


  return (
    <section className={style.detailsection}>
      {game.id && (
        <div className={style.detailcontainer}>
          <div className={style.detailbox}>

            <div className={style.imageContainer}>
              <img className={style.image} src={game.img} alt={game.name} />
            </div>
          
            <div className={style.title}>
              <h1>{game.name}</h1>
            </div>

      
            <div className={style.rating}>
            <h2>rating: {game.rating} released: {game.releaseDate}</h2>
            </div>
            
            <div className={style.genres}>
            {game.genres ?
                    game.genres.map((genre) => genre.name).join(", "): game.Genres.map((genre) => genre.name).join(", ")}
            </div>

            <div className={style.idcontainer}>
            <h2>ID: {game.id}</h2>
            </div>

            <div className={style.description}>
            <p className={style.detaildescription}>{game.description}</p>
            </div>

            
            <div className={style.platformcontainer}>
            <h2>Platforms: {game.platforms}</h2>
            </div>
           

          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;





