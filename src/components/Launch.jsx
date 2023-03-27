import { fetchData } from "../services/api";
import { useEffect, useState } from "react";

const Launch = () => {
  const [launch, setLaunch] = useState([]);
  const [limit, setLimit] = useState(5);
  const [processing, setProcessing] = useState(false);

  const getData = async () => {
    setProcessing(true);
    setTimeout(async () => {
      const result = await fetchData(
        "https://api.spacexdata.com/v3/launches?limit=" + limit
      );
      setLimit(limit + 5);
      setLaunch(result.data);
      setProcessing(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  const defalutImg =
    "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <>
      {launch.map((curr_item, index) => (
        <section className="section-1" key={curr_item.mission_name}>
          <div className="left">
            <h1>Name:{curr_item.mission_name}</h1>
            <h3>Launch date-{curr_item.launch_date_local}</h3>
            <p>{curr_item.details}</p>
          </div>
          <div className="right">
            <img src={curr_item.links.flickr_images?.[0] || defalutImg} />
          </div>
        </section>
      ))}
      {processing && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <svg
            version="1.1"
            id="L3"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            height="100"
            width="100"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
          >
            <circle
              fill="none"
              stroke="#fff"
              stroke-width="4"
              cx="50"
              cy="50"
              r="44"
            />
            <circle
              fill="#fff"
              stroke="#e74c3c"
              stroke-width="3"
              cx="8"
              cy="54"
              r="6"
            >
              <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 48"
                to="360 50 52"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      )}
      {!processing && (
        <div id="loadMore" onClick={async () => await getData()}>
          Load More
        </div>
      )}
    </>
  );
};
export default Launch;
