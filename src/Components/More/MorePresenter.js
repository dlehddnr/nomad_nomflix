import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Message from "Components/Message";

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

const Video = styled.iframe`
  width: 300px;
  height: 200px;
`;

const BigBox = styled.div`
  width: 100px;
  height: 200px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 1px 5px 2px white;
`;

const SmallBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px;
  font-weight: 600;
`;

const Production = styled.img`
  width: 100%;
  height: auto;
`;

const MorePresenter = ({ loading, error, result, name }) =>
  loading ? (
    "loading"
  ) : error ? (
    <Message />
  ) : name === "youtube" ? (
    <Section>
      <Video
        src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
      />
    </Section>
  ) : name === "production" ? (
    <Section>
      {console.log(result)}
      <BigBox>
        <ImageBox>
          <Production
            src={
              result.production_companies[0]
                ? `https://image.tmdb.org/t/p/w200${
                    result.production_companies[0].logo_path
                  }`
                : error
            }
          />
        </ImageBox>
        <SmallBox>
          {result.production_companies[0]
            ? result.production_companies[0].name
            : error}
        </SmallBox>
      </BigBox>
      <BigBox>
        <ImageBox>
          <Production
            src={
              result.production_companies[1]
                ? `https://image.tmdb.org/t/p/w200${
                    result.production_companies[1].logo_path
                  }`
                : error
            }
          />
        </ImageBox>
        <SmallBox>
          {result.production_companies[1]
            ? result.production_companies[1].name
            : error}
        </SmallBox>
      </BigBox>
      <BigBox>
        <ImageBox>
          <Production
            src={
              result.production_companies[2]
                ? `https://image.tmdb.org/t/p/w200${
                    result.production_companies[2].logo_path
                  }`
                : error
            }
          />
        </ImageBox>
        <SmallBox>
          {result.production_companies[2]
            ? result.production_companies[2].name
            : error}
        </SmallBox>
      </BigBox>
    </Section>
  ) : name === "country" ? (
    <Section>{}</Section>
  ) : (
    error
  );
// 아마도 render => componentDidMount 가 꼭 화면 리프래쉬가 아니야
MorePresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default MorePresenter;
