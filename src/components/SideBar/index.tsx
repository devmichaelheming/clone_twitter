import React from 'react';
import StickyBox from "react-sticky-box";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no input" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
          <FollowSuggestion
            name="Jose silva"
            nickname="joseslv"
          />,
          <FollowSuggestion
            name="Maria Gabriela"
            nickname="devmaria"
          />,
          <FollowSuggestion
            name="Luke Cage"
            nickname="cageluke"
          />
          ]}
          />
        <List
        title="Talvez você curta"
        elements={[
          <News/>,
          <News/>,
          <News/>,
          <News/>,
          <News/>,
          <News/>,
          <News/>,
          <News/>,
          <News/>,
          <News/>,
          <News/>,
        ]}
        />
      </Body> 
    </Container>
  );
}

export default SideBar;