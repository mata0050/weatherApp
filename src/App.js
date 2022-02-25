import './App.css';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <div className='App'>
      <h1>Weather app</h1>
      <WeatherDisplay/>
      {process.env.weatherApiKey}
    </div>
  );
}

export default App;
