import './App.css';
import React from 'react';
import useRequest from './hooks/useRequest';
import fakeData from './fakeData/fakeData.json';

// Components
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=London&days=10&aqi=yes&alerts=no`;
  const { data, loading } = useRequest(url);
  // const data = fakeData;
  console.log(data);

  return (
    <div>
      <h2 style={{ margin: '30px 0px' }}>WeatherApp</h2>
      {Object.keys(data).length !== 0 && (
        <>
          <CurrentWeather data={data} />
          <Forecast data={data.forecast} />
        </>
      )}
    </div>
  );
}

export default App;
