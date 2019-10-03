import styled from 'styled-components';

export const WeatherItemContent = styled.div`
  display: flex;
  font-weight: bold;
  color: white;
  margin: 7px 0;
  min-width: 300px;
  cursor: pointer;
`;

export const TempContainer = styled.div`
  position: relative;
  width: 90px;
  display: flex;
  margin-right: 10px;
  justify-content: space-around;
`;

export const TempItem = styled.div`
  display: flex;
  i {
    font-size: 10px;
  }
`;
