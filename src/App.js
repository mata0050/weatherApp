import './App.css';
import React, { useState } from 'react';
import useRequest from './hooks/useRequest';
import fakeData from './fakeData/fakeData.json';

// Components
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Search from './components/Search';

function App() {
  const [searchResult, setSearchResult] = useState('Ottawa');
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResult}&days=10&aqi=yes&alerts=no`;
  const { data, loading } = useRequest(url);

  // * comment out line 13 and uncomment line 17 to use fake data
  // * if you don't want to register for an API key at
  // * https://www.weatherapi.com/
  // const data = fakeData;


  return (
    <div>
      <h2 style={{ margin: '30px 0px' }}>WeatherApp</h2>
      <Search setSearchResults={setSearchResult} />
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
