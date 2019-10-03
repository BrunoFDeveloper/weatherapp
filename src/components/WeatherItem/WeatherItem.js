import React, { memo, useEffect, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import {
  WeatherItemContent,
  TempContainer,
  TempItem
} from './WeatherItem.styles';
import useFetch from '../Fetch/Fetch';
import { API } from '../../Utils/Api';

const WeatherItem = ({ cityName, onClick }) => {
  const city = useFetch(
    `${API.url}?q=${cityName},br&units=metric&appid=${API.appId}`
  );
  return (
    <>
      {city && (
        <WeatherItemContent onClick={onClick}>
          <TempContainer>
            <TempItem>
              <Icon name='long arrow alternate down' />
              {city.list[0].main.temp_min.toFixed(0)}°
            </TempItem>
            <TempItem>
              {city.list[0].main.temp_max.toFixed(0)}°
              <Icon name='long arrow alternate up' />
            </TempItem>
          </TempContainer>
          <span>{city.city.name}</span>
        </WeatherItemContent>
      )}
    </>
  );
};

export default memo(WeatherItem);
