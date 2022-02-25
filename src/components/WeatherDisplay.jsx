import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {getCurrentWeather} from '../api/getWeather';

function WeatherDisplay() {
  const [currentWeather, setCurrentWeather] = useState();
  getCurrentWeather('harare');


  console.log(currentWeather)

  return (
    <StyledWeather>
      <h2>WeatherDisplay</h2>
      {process.env.REACT_APP_WEATHER_KEY}
    </StyledWeather>
  );
}

const StyledWeather = styled.div`
  h2 {
    font-size: 5rem;
  }
`;

export default WeatherDisplay;
