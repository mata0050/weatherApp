import React, { useState } from 'react';
import styled from 'styled-components';

function CurrentWeather({ data }) {
  const [temp, setTemp] = useState(false);
  return (
    <StyledWeather>
      <header>
        <div className='current-weather box-shadow'>
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
        <div className='location box-shadow'>
          <h2>{data.location.region}</h2>
          <h3>{data.location.country}</h3>
          <h4>{data.location.name}</h4>
        </div>
      </header>
    </StyledWeather>
  );
}

const StyledWeather = styled.div`

header {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .current-weather {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      padding: 20px;
   

      img {
        width: 80px;
        height: 80px;
      }

      h1 {
        font-size: 3rem;
      }
      
      .content {

        h5{
          font-weight: normal;
        }
      }

    }

    .location{
      padding: 20px;

      h2{
        text-align: right;
        font-size: 1rem;
        margin-bottom: 10px;
      }

      h3{
        text-align: right;
        font-size: .8rem;
        margin-bottom:0px;
      }
      h4{
        text-align: right;
        font-size: .8rem;
        font-weight: 500;
        margin-top:10px;
      }
    }

`;

export default CurrentWeather;
