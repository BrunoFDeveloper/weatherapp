import styled from 'styled-components';
import media from '../../components/MediaQueries/MediaQueries';

export const CapitalsContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 190px;
  flex-wrap: wrap;
  ${media.tablet`
    flex-wrap: unset;
    height: unset;
    align-items: center;
  `}
`;
