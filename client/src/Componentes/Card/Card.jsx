import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, img }) => {
  return (
  <div className={style.grid}>

    <div className={style.cardcontainer}>

    <div className={style.card}>

      <div className={style.wrapper}>
        <h1 className={style.title}>{name}</h1>

        <Link to={`/detail/${id}`}>
          <img className={style.coverimage} src={img}></img>
        </Link>
      </div>
      
    </div>

    </div>

    </div>
  );
};

export default Card;
