import React from 'react';
import { MainContent, ChildrenContent } from './Content.styles';

const Content = ({ children }) => (
  <MainContent>
    <ChildrenContent>{children}</ChildrenContent>
  </MainContent>
);

export default Content;
