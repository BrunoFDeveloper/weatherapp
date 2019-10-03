import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import media from '../MediaQueries/MediaQueries';

export const WeatherBoxContainer = styled.div`
  position: relative;
  display: flex;
  height: 300px;
  background: white;
  filter: drop-shadow(0 0 0.2rem black);
  width: 52%;
  margin: 15px auto;
  padding: 15px 20px;
  flex-direction: column;
  ${media.tablet`
    width: 100%;
    height: 300px;
  `}
`;

export const CloseButton = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;
