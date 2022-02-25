import React, { useState } from 'react';
import styled from 'styled-components';

import useRequest from '../hooks/useRequest';
import fakeData from '../fakeData/fakeData.json';
import CurrentWeather from './CurrentWeather';

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
          <CurrentWeather data={data} />
        </>
      )}
    </StyledWeather>
  );
}

const StyledWeather = styled.div`
  h2 {
    font-size: 5rem;
  }

  
  }
`;

export default WeatherDisplay;
