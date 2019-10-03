import styled from 'styled-components';
import media from '../../components/MediaQueries/MediaQueries';

export const Title = styled.h1`
  &&& {
    width: 100%;
    display: block;
    text-align: ${({ align }) => align};
    font-size: ${({ size }) => `${size}px`};
    margin: ${({ margin }) => margin};
    color: ${({ color }) => color};
    font-weight: ${({ weight }) => weight};
    strong {
      font-weight: bold;
    }
    ${media.tablet`
      text-align: ${({ mobileAlign }) => mobileAlign};
    `}
  }
`;

export const Hr = styled.hr`
  background: ${({ color }) => color};
  width: 100%;
  opacity: 0.4;
`;

export const FlexContainer = styled.div`
  display: flex;
  text-align: ${({ alignText }) => alignText};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ content }) => content};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`;
