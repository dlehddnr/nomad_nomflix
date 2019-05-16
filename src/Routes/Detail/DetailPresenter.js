import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link, withRouter } from "react-router-dom";

import Loader from "Components/Loader";
import Message from "Components/Message";
import MorePresenter from "Components/More/MorePresenter";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Button = styled.input`
  all: unset;
  background-color: #f9ca24;
  color: #020202;
  padding: 2px;
  border-radius: 2px;
  border: 1px solid black;
  width: 30px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const TabContainer = styled.div`
  background-color: #020202;
  width: 50%;
  height: 300px;
  color: white;
  margin-top: 20px;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  padding: 20px;
`;

const Tab = styled.button`
  all: unset;
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  font-size: 14px;
  width: 100px;
  height: 25px;
  text-align: center;
  border-bottom: 4px solid
    ${props => (props.selected ? "#e74c3c" : "transparent")};
  &:not(:last-child) {
    margin-right: 30px;
  }
  transition: border-bottom 0.5s ease-in-out;
`;

const DetailPresenter = ({
  result,
  error,
  loading,
  location,
  handleClick,
  name
}) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>∙</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>∙</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} /`
                )}
            </Item>
            <Divider>∙</Divider>
            <Item>
              <a
                href={`https://www.imdb.com/title/${result.imdb_id}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button value="IMDB" />
              </a>
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <TabContainer>
            <List>
              <ListItem selected={name === "youtube"}>
                <Tab name="youtube" onClick={handleClick}>
                  YouTube
                </Tab>
              </ListItem>
              <ListItem selected={name === "production"}>
                <Tab name="production" onClick={handleClick}>
                  Production
                </Tab>
              </ListItem>
              <ListItem selected={name === "country"}>
                <Tab name="country" onClick={handleClick}>
                  Country
                </Tab>
              </ListItem>
            </List>
            <MorePresenter
              result={result}
              error={error}
              loading={loading}
              name={name}
            />
          </TabContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  handleClick: PropTypes.func,
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default withRouter(
  ({ result, loading, error, location, handleClick, name }) => (
    <DetailPresenter
      result={result}
      loading={loading}
      error={error}
      location={location}
      handleClick={handleClick}
      name={name}
    />
  )
);
