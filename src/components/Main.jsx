import React, { useState, useEffect } from "react";
import axios from "axios";
import { cityIds } from "./cities";
import Card from "./Card";

const Main = () => {
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/group?id=${cityIds.join(
            ","
          )}&appid=${apiKey}`
        );
        setData(response.data.list);
        console.log(response.data.list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cityName.trim() !== "") {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        );
        setData([response.data]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-24 text-textColor gap-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-8">Welcome SkyPulse!</h1>
        <p className="text-lg font-medium">
          Please enter the name of the city you want to see the weather forecast
          for below.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-[30rem] h-[3rem] mb-10">
        <input
          className="w-full h-full rounded-full p-6 border border-HFtextColor focus:outline-none focus:ring-0"
          type="text"
          placeholder="Please Enter a City Name..."
          value={cityName}
          onChange={handleInputChange}
        />
        <button type="submit" style={{ display: "none" }}>
          Submit
        </button>
      </form>
      <Card data={data} />
    </div>
  );
};

export default Main;
