import axios from 'axios';

export const getCurrentWeather = async (location) => {
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key= ${process.env.REACT_APP_WEATHER_KEY} &q=${location}&aqi=no`
    );
    if(Object.keys(data).length !==0){
      console.log(Object.keys(data))
    

      return data;
    }
  } catch (error) {
    console.error(error);
  }
};


