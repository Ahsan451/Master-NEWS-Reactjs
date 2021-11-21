import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = {
    progress: 0,
    InputSearch: "general",
  };

  setInputSearch = (input) => {
    this.setState({ InputSearch: input });
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
            height={5}
          />
          <Navbar setSearch={this.setInputSearch} />
          {/* <SearchNews />*/}
          <div
            style={{
              height: "60px",
              display: "flex",
              justifyContent: "center",
              margin: "10px 0px 0px 0px",
            }}
          >
            <h1 className=" animated infinite flash" id="headlinesH">
              LATEST HEADLINES
            </h1>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  category="general"
                  pageSize={6}
                  key="/"
                />
              }
            ></Route>
            <Route
              path="/Home"
              element={
                <News
                  setProgress={this.setProgress}
                  category="general"
                  pageSize={6}
                  key="home"
                />
              }
            ></Route>
            <Route
              path="/Business"
              element={
                <News
                  setProgress={this.setProgress}
                  category="business"
                  pageSize={6}
                  key="Business"
                />
              }
            ></Route>
            <Route
              path="/Sports"
              element={
                <News
                  setProgress={this.setProgress}
                  category="sports"
                  pageSize={6}
                  key="Sports"
                />
              }
            ></Route>
            <Route
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress}
                  category="health"
                  pageSize={6}
                  key="Health"
                />
              }
            ></Route>
            <Route
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  category="entertainment"
                  pageSize={6}
                  key="Entertainment"
                />
              }
            ></Route>
            <Route
              path="/Science"
              element={
                <News
                  setProgress={this.setProgress}
                  category="science"
                  pageSize={6}
                  key="Science"
                />
              }
            ></Route>
            <Route
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress}
                  category="technology"
                  pageSize={6}
                  key="Technology"
                />
              }
            ></Route>
            <Route
              path="/search"
              element={
                <News
                  setProgress={this.setProgress}
                  category={
                    this.state.InputSearch === ""
                      ? this.setInputSearch("general")
                      : this.state.InputSearch
                  }
                  pageSize={6}
                  key={this.state.InputSearch}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
