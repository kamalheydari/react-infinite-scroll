import React from "react";
import { useGlobalContext } from "../context/appContext";

import Card from "./Card";
import Loading from "./Loading";

const Cards = () => {
  const { isError, coins, isLoading } = useGlobalContext();

  if (isError) {
    return <div className="error glass-box">There Was An Error...</div>;
  }

  return (
    <>
      <div className="cards">
        {coins.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
      <Loading />
    </>
  );
};

export default Cards;
