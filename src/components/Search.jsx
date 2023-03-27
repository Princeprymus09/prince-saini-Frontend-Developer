import axios from "axios";
import { useState } from "react";

import Select from "react-dropdown-select";

const Search = () => {
  const [inputdata, setInputdata] = useState("");
  const [searchType, setSearchType] = useState("rockets");
  const [result, setResult] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const options = [
    {
      value: "launches",
      label: "Launches",
    },
    {
      value: "rockets",
      label: "Rockets",
    },
  ];

  const defalutImg =
    "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  const handleChange = async () => {
    try {
      setErrorMsg(false);
      let response = await axios.post(
        `https://api.spacexdata.com/v4/${searchType}/query`,
        {
          query: {
            name: inputdata,
          },
        }
      );
      if (!response.data.docs.length) setErrorMsg(true);
      setResult(response.data.docs);
    } catch (error) {
      console.log("eroor while fetching data", error);
    }
  };

  return (
    <div className="search">
      <div className="section">
        <Select
          values={[
            {
              value: "rockets",
              label: "Rockets",
            },
          ]}
          options={options}
          onChange={(values) => {
            setResult([]);
            setSearchType(values[0].value);
          }}
        />
        <input
          type="text"
          placeholder="search"
          className="search-input"
          onChange={(e) => setInputdata(e.target.value)}
        />

        <button className="search-btn" onClick={handleChange}>
          Search
        </button>
        {errorMsg ? <p className="error-msg">No results!</p> : <></>}
      </div>

      {result.map((curr_item, idx) =>
        searchType === "rockets" ? (
          <section
            className="search-section"
            style={{ display: "flex", marginTop: "20px" }}
            key={`rocket-${idx}`}
          >
            <div className="left">
              <h1>Name - {curr_item.name}</h1>
              <h3>First Flight-{curr_item.first_flight}</h3>
              <p>{curr_item.description}</p>
            </div>
            <div className="right">
              <img src={curr_item.flickr_images?.[0]} />
            </div>
          </section>
        ) : (
          <section
            className="search-section"
            style={{ display: "flex", marginTop: "20px" }}
            key={`capsule-${idx}`}
          >
            <div className="left">
              <h1>Mission Name - {curr_item.name}</h1>
              <p>Details-{curr_item.details}</p>
            </div>
            <div className="right">
              <img src={curr_item.links?.flickr?.original?.[0] || defalutImg} />
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Search;
