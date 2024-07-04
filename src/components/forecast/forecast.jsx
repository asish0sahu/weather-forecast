/* eslint-disable react/prop-types */
import {
    Accordion,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton,
  } from "react-accessible-accordion";
  
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  
  const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
      WEEK_DAYS.slice(0, dayInWeek)
    );
  
    return (
      <>
        <label className="text-[23px] font-semibold">Daily Forecast</label>
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="bg-[#f5f5f5] rounded-[15px] h-[40px] m-[5px] flex items-center cursor-pointer text-[14px] p-[5px] px-[20px]">
                    <img
                      alt="weather"
                      className="w-[45px]"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="text-[#212121] flex-1 font-semibold ml-[15px]">
                      {forecastDays[idx]}
                    </label>
                    <label className="flex-1 mr-[15px] text-right">
                      {item.weather[0].description}
                    </label>
                    <label className="text-[#757575]">
                      {Math.round(item.main.temp_min)}°C /
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid row-gap-[0px] col-gap-[15px] flex-1 grid-cols-[auto_auto] p-[5px] px-[15px]">
                  <div className="flex h-[30px] justify-between items-center">
                    <label className="text-[#757575]">Pressure </label>
                    <label className="text-[#212121]">{item.main.pressure} mbar</label>
                  </div>
                  <div className="flex h-[30px] justify-between items-center">
                    <label className="text-[#757575]">Humidity </label>
                    <label className="text-[#212121]">{item.main.humidity}%</label>
                  </div>
                  <div className="flex h-[30px] justify-between items-center">
                    <label className="text-[#757575]">Clouds: </label>
                    <label className="text-[#212121]">{item.clouds.all}%</label>
                  </div>
                  <div className="flex h-[30px] justify-between items-center">
                    <label className="text-[#757575]">Wind Speed: </label>
                    <label className="text-[#212121]">{item.wind.speed} m/s</label>
                  </div>
                  <div className="flex h-[30px] justify-between items-center">
                    <label className="text-[#757575]">Sea level: </label>
                    <label className="text-[#212121]">{item.main.sea_level} m</label>
                  </div>
                  <div className="flex h-[30px] justify-between items-center">
                    <label className="text-[#757575]">Feels like: </label>
                    <label className="text-[#212121]">{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    );
  };
  
  export default Forecast;
  