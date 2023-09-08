import React from "react";
import "../Card/Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, img }) => {
  return (
  <div className="grid">
    <div className="card-container">
    <div className="card">
      <div className="wrapper">
        <h1 className="title">{name}</h1>
        <Link to={`/detail/${id}`}>
          <img className="cover-image" src={img}></img>
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card;
