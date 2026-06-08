import "../styles/SandwichesList.css";
import "../styles/Cards.css";
import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import axios from "axios";

export const SandwichesList = () => {
  const [sandwiches, setSandwiches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches`,
      );
      setIsLoading(false);
      // console.log(response.data)
      setSandwiches(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <h2>Sorry the page is loading...</h2>;
  }

  return (
    <div className="sandwiches-page">
      <h2>This is SandwichesList component...</h2>
      <section className="cards-container">
        {sandwiches.map((sandwich) => {
          return <Cards key={sandwich.id} obj={sandwich} />;
        })}
      </section>
    </div>
  );
};
