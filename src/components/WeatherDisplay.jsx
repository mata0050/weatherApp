import React, { useState } from 'react';
import styled from 'styled-components';

import useRequest from '../hooks/useRequest';
import fakeData from '../fakeData/fakeData.json';

function WeatherDisplay() {
  const [temp, setTemp] = useState(true);
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=London&days=10&aqi=yes&alerts=no`;
  // const { data, loading } = useRequest(url);
  const data = fakeData;
  console.log(data);

  return (
    <StyledWeather>
      <h2>WeatherDisplay</h2>
      {Object.keys(data).length !== 0 && (
        <>
          <header>
            <div className='current-weather'>
              <img
                src={data.current.condition.icon}
                alt={data.current.condition.text}
              />
              {temp ? (
                <h1>{data.current.temp_c}</h1>
              ) : (
                <h1>{data.current.temp_f}</h1>
              )}
              <div className='content'>
                <h5>Precipitation: {data.current.precip_in}</h5>
                <h5>Wind: {data.current.wind_kph} km/h</h5>
              </div>
            </div>
            <div className='location'>
              <h2>{data.location.region}</h2>
              <h3>{data.location.country}</h3>
              <h4>{data.location.name}</h4>
            </div>
          </header>
        </>
      )}
    </StyledWeather>
  );
}

const StyledWeather = styled.div`
  h2 {
    font-size: 5rem;
  }

  header {
    height: 100px;
    max-width: 800px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .current-weather {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 280px;

      img {
        width: 100px;
        height: 100px;
      }

      h1 {
        font-size: 3rem;
      }
      .content {
        margin-top:-30px;
        h5{
          font-weight: normal;
          margin-bottom: -15px;
        }
      }
    }
  }
`;

export default WeatherDisplay;
