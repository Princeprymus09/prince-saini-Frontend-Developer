import { fetchData } from "../services/api";
import { useEffect, useState } from "react";

const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchData("https://api.spacexdata.com/v4/rockets");
      setRockets(result.data);
    })();
  }, []);

  return (
    <>
      {rockets.map((curr_item) => (
        <section className="section-1" key={curr_item.name}>
          <div className="left">
            <h1>Name:{curr_item.name}</h1>
            <h3>First Flight-{curr_item.first_flight}</h3>
            <p>{curr_item.description}</p>
          </div>
          <div className="right">
            <img src={curr_item.flickr_images?.[0]} alt="" />
          </div>
        </section>
      ))}
    </>
  );
};
export default Rockets;
