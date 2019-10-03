import styled from 'styled-components';
import { Search } from 'semantic-ui-react';

export const SearchInputElement = styled(Search)`
  &&& {
    width: 280px;
    margin: 30px auto;
    .input {
      width: 100%;
      input {
        border-radius: 0;
      }
    }
  }
`;
