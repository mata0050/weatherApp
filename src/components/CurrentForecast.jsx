import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function CurrentForecast({ data }) {
  const currentWeather = data.forecastday[0].hour;
  console.log(currentWeather);
  return (
    <StyledForecast>
      <div className='box-shadow current-forecast'>
        {currentWeather.map((weather) => (
          <div className='card box-shadow' key={weather.time_epoch}>
            <span>{moment(weather.time).format('h:mm:ss a')}</span>
            <img src={weather.condition.icon} alt='weather icon' />
            <p>{weather.temp_c} °C</p>
          </div>
        ))}
      </div>
    </StyledForecast>
  );
}

const StyledForecast = styled.div`
  margin-top: 40px;
  .current-forecast {
    padding: 20px;
    display: flex;
    overflow-y: hidden;

    .card {
      padding: 10px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #303134;
      color: #fff;
      span {
        font-size: 0.9rem;
        text-align: center;
      }
    }

    /* width */
    ::-webkit-scrollbar {
      height: 5px;
      border-radius: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
      border-radius: 5px;
    }
  }
`;

export default CurrentForecast;
