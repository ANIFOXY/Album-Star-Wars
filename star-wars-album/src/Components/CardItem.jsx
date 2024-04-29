import React from "react";

const CardItem = ({ title, description, image }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
