import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cityIds =
      "2643743,7778677,2618425,3169070,5128581,745044,2921044,3017382";
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/group?id=${cityIds}&appid=${apiKey}`
        );
        setData(response.data.list);
        console.log(response.data.list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-24 text-textColor gap-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-8">Welcome SkyPulse!</h1>
        <p className="text-lg font-medium">
          Please enter the name of the city you want to see the weather forecast
          for below.
        </p>
      </div>
      <div className="w-[30rem] h-[3rem] mb-10">
        <input
          className="w-full h-full rounded-full p-6 border border-HFtextColor focus:outline-none focus:ring-0"
          type="text"
          placeholder="Please Enter a City Name..."
        />
      </div>
      <div className="gap-10 grid grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[17rem] h-[17rem] bg-HFbgColor text-bgColor p-4 rounded-xl flex flex-col gap-5 shadow-2xl shadow-HFtextColor"
          >
            <img
              src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
              className="w-[4rem] h-[4rem]"
            />
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-xl text-HFtextColor">
                <h2>{item.name}</h2>
              </li>
              <li>Temperature: {item.main.temp} K</li>
              <li>Humidity: {item.main.humidity}%</li>
              <li>Pressure: {item.main.pressure} hPa</li>
              <li>Weather: {item.weather[0].description}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;