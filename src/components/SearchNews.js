import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import News from "./News";
export class SearchNews extends Component {
  state = {
    input: "sports",
  };

  setSearchInput = (input) => {
    this.setState({ input: input });
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search News"
            aria-label="Search"
            onChange={(e) => this.props.Input(e.target.value)}
          />
          <Link to="/search">
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </Link>
        </form>
      </>
    );
  }
}

export default SearchNews;
