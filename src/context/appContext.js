import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //? global states
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  //? fetch data
  const fetchCoins = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
      );
      const data = await response.json();
      setCoins([...coins, ...data]);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [page]);

  //? fetch on scroll
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!isLoading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight
      ) {
        setPage((prevPage) => {
          return prevPage + 1;
        });
      }
      return () => window.removeEventListener("scroll", event);
    });
  }, []);

  return (
    <AppContext.Provider value={{ isError, isLoading, coins }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
