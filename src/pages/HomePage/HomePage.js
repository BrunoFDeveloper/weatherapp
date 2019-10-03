import React, { useState, useEffect, useMemo } from 'react';
// Styles
import { CapitalsContainer } from './HomePage.styles';
import { Title, Hr } from '../../components/Utils/Utils.styles';
// Components
import WeatherItem from '../../components/WeatherItem/WeatherItem';
import SearchInput from '../../components/SearchInput/SearchInput';
import WeatherBox from '../../components/WeatherBox/WeatherBox';
import { API } from '../../Utils/Api';

const UI_STATE = {
  showWeatherBox: false,
  dataWeather: null
};

const STATES = [
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rondônia',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
];

const HomePage = ({
  match: {
    params: { cityName }
  }
}) => {
  const [uiState, setUIState] = useState(UI_STATE);

  useEffect(() => {
    const getDataWeather = async () => {
      const result = await fetch(
        `${API.url}?q=${cityName},br&lang=pt&units=metric&appid=${API.appId}`
      );
      const resultJson = await result.json();
      setUIState(prevState => ({
        ...prevState,
        dataWeather: resultJson,
        showWeatherBox: true
      }));
    };

    getDataWeather();
  }, [cityName]);

  const handleShowBox = () =>
    setUIState(prevState => ({
      ...prevState,
      showWeatherBox: !prevState.showWeatherBox
    }));

  const randomizeArray = useMemo(
    () => STATES.sort(() => Math.random() - 0.5).slice(0, 10),
    []
  );

  const { showWeatherBox, dataWeather } = uiState;
  return (
    <>
      <Title size='35' align='center' color='white'>
        Previsão do tempo
      </Title>

      {showWeatherBox && (
        <WeatherBox handleShowBox={handleShowBox} data={dataWeather} />
      )}

      <SearchInput
        placeholder='Insira aqui o nome da cidade'
        noResultsMessage='Nenhuma cidade encontrada!'
      />

      <Hr />
      <Title size='35' align='left' color='white'>
        Capitais
      </Title>

      <CapitalsContainer>
        {randomizeArray.map(state => (
          <WeatherItem cityName={state} key={state} />
        ))}
      </CapitalsContainer>
    </>
  );
};

export default HomePage;
