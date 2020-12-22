import { React, useEffect, useState } from "react";
import "./index.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kathmandu");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=97f231d2259d75f252ece39b2942ae42`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
      <h1 className="heading">Weather App</h1>
        <div className="inputData">
          <input
            type="search"
            
            className="input-field"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i class="fas fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">{city.temp}&#176; cel</h1>
              <h3 className="tempmin-max">
                Min: {city.temp_min}&#176; cel | Max: {city.temp_max}&#176; cel
              </h3>
              {/*  //&#176; is degree symbol */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Weather;
