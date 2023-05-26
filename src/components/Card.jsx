import React from "react";

const Card = ({ data }) => {
  return (
    <div className="gap-10 grid grid-cols-4">
      {data.map((item) => {
        const temperatureKelvin = item.main.temp;
        const temperatureCelsius = temperatureKelvin - 273.15;
        return (
          <div
            key={item.id}
            className="w-[15rem] h-[11rem] bg-HFbgColor text-bgColor p-4 rounded-xl flex flex-col gap-5 shadow-2xl shadow-HFtextColor"
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
              <li>Temperature: {temperatureCelsius.toFixed(1)} °C</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
