/* eslint-disable react/prop-types */
const CurrentWeather = ({ data }) => {
    return (
      <div className="w-[300px] rounded-[6px] shadow-[10px_-2px_20px_2px_rgba(0,0,0,0.3)] bg-[#333] text-white m-[20px_auto_0_auto] p-[0_20px_20px_20px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-[18px] leading-[1] m-[5px] tracking-[1px]">{data.city}</p>
            <p className="font-normal text-[14px] leading-[1] m-[0]">{data.weather[0].description}</p>
          </div>
          <img
            alt="weather"
            className="m-[5px] w-[80px]"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[70px] w-auto tracking-[-5px] my-[10px]">{Math.round(data.main.temp)}°C</p>
          <div className="w-full pl-[20px]">
            <div className="flex justify-between">
              <span className="text-left font-normal text-[12px]">Details</span>
            </div>
  
            <div className="flex justify-between">
              <span className="text-left font-normal text-[12px]">Real Feel</span>
              <span className="text-right font-semibold text-[12px]">{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-left font-normal text-[12px]">Wind</span>
              <span className="text-right font-semibold text-[12px]">{data.wind.speed} m/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-left font-normal text-[12px]">Humidity</span>
              <span className="text-right font-semibold text-[12px]">{data.main.humidity}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-left font-normal text-[12px]">Pressure</span>
              <span className="text-right font-semibold text-[12px]">{data.main.pressure} mbar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-left font-normal text-[12px]">Chances of rain</span>
              <span className="text-right font-semibold text-[12px]">{data.clouds.all}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CurrentWeather;
  