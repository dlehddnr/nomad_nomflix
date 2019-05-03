import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const Slink = styled(Link)``;

export default () => (
  <header>
    <List>
      <li>
        <Slink href="/">Movies </Slink>
      </li>
      <li>
        <Slink href="/tv">TV </Slink>
      </li>
      <li>
        <Slink href="/search">Search </Slink>
      </li>
    </List>
  </header>
);
