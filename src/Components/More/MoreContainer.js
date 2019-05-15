import React from "react";
import MorePresenter from "./MorePresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: false,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <MorePresenter loading={loading} error={error} result={result} />;
  }
}
