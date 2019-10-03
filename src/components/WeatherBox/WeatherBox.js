import React, { memo } from 'react';
import { WeatherBoxContainer, CloseButton } from './WeatherBox.styles';
import { Title, Hr, FlexContainer } from '../../components/Utils/Utils.styles';
import { Icon } from 'semantic-ui-react';

const WeatherBox = ({ handleShowBox, data }) => (
  <WeatherBoxContainer>
    <CloseButton name='close' onClick={handleShowBox} />
    <Title size='13' margin='0 0'>
      {data.city.name} - {data.city.country}
    </Title>

    <FlexContainer
      direction='column'
      width='80%'
      margin='0 auto'
      alignText='center'
    >
      <Title size='40' margin='15px 0' color='#323232' align='center'>
        {data.list[0].main.temp.toFixed(0)}°C <br />
        {data.list[0].weather[0].description}
      </Title>
      <FlexContainer content='space-between'>
        <Title size='13' color='#323232'>
          <Icon name='long arrow alternate down' />
          {data.list[0].main.temp_min.toFixed(0)}°C &nbsp;{' '}
          {data.list[0].main.temp_max.toFixed(0)}°C
          <Icon name='long arrow alternate up' />
        </Title>
        <Title size='13' weight='300' margin='0' color='#323232'>
          Sensação <strong>{data.list[0].main.temp.toFixed(0)}°C</strong>
        </Title>
      </FlexContainer>
      <FlexContainer content='space-between'>
        <Title size='13' weight='300' margin='0' color='#323232'>
          Vento <strong>{data.list[0].wind.speed} mm/s</strong>
        </Title>
        <Title size='13' weight='300' margin='0' color='#323232'>
          Humidade <strong>{data.list[0].main.humidity}%</strong>
        </Title>
      </FlexContainer>
    </FlexContainer>

    <Hr color='#648FC3' />

    <FlexContainer
      direction='row'
      width='90%'
      margin='0 auto'
      content='space-between'
    >
      {data.list.slice(1, 5).map(item => (
        <FlexContainer direction='column' margin='10px 0' key={item.dt}>
          <Title size='15' margin='0'>
            {item.dt_txt.substr(11, 5)}
          </Title>
          <Title size='10' margin='0' color='#648FC3'>
            {item.main.temp_min.toFixed(0)}°C &nbsp;{' '}
            {item.main.temp_max.toFixed(0)}°C
          </Title>
        </FlexContainer>
      ))}
    </FlexContainer>
  </WeatherBoxContainer>
);

export default memo(WeatherBox);
