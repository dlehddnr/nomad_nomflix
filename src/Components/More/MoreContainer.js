import React from "react";
import MorePresenter from "./MorePresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  async componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <MorePresenter loading={loading} error={error} result={result} />;
  }
}
