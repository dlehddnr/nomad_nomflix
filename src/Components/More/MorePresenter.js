import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Message from "Components/Message";

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
  border-bottom: 4px solid #e74c3c;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.iframe`
  width: 300px;
  height: 200px;
`;

const BigBox = styled.div`
  width: 100px;
  height: 200px;
  background-color: white;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const MorePresenter = ({ loading, error, result, name }) =>
  loading ? (
    "loading"
  ) : error ? (
    <Message />
  ) : name == "youtube" ? (
    <Section>
      <Video
        src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
      />
    </Section>
  ) : (
    <Section>
      <BigBox />
      <BigBox />
      <BigBox />
    </Section>
  );
// 아마도 render => componentDidMount 가 꼭 화면 리프래쉬가 아니야
MorePresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default MorePresenter;
