import styled from 'styled-components';
import media from '../MediaQueries/MediaQueries';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ChildrenContent = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  ${media.tablet`
    width: 100%;
    padding: 10px;
  `}
`;
