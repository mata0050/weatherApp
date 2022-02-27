import './App.css';
import React, { useState } from 'react';
import useRequest from './hooks/useRequest';
import fakeData from './fakeData/fakeData.json';

// React toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Search from './components/Search';

function App() {
  const [searchResult, setSearchResult] = useState('Ottawa');
  // const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResult}&days=10&aqi=yes&alerts=no`;
  // const { data } = useRequest(url);

  // * uncomment out line 17 and line 18 and comment line 23 to use you
  // * own weather api key
  // * if you don't want to register for an API key at
  // * https://www.weatherapi.com/
  const data = fakeData;

  return (
    <div>
      <ToastContainer />
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
