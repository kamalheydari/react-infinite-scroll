import React from "react";

const Card = ({
  name,
  image,
  symbol,
  current_price,
  market_cap,
  price_change_percentage_24h: price_change,
}) => {
  return (
    <article className="card glass-box">
      <div className="card__info">
        <img src={image} alt={name} className="info__img" />
        <div className="info__coin">
          <span className="coin__name">{name}</span>
          <span className="coin__symbol">{symbol}</span>
        </div>
        <div className="info__price">
          <span
            className={
              price_change > 0 ? "price__change green " : "price__change red"
            }
          >
            {price_change}
          </span>
          <span className="price__current">
            ${current_price.toLocaleString()}
          </span>
        </div>
      </div>
      <h3 className="card__market-cap">${market_cap.toLocaleString()}</h3>
    </article>
  );
};

export default Card;
