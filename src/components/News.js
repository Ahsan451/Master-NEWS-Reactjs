import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsCss from "../css/News.module.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  search = false;
  constructor(props) {
    super(props);
    this.state = {
      Cricketarticles: [],
      loading: false,
      page: 1,
      totalResults: 50,
    };
    document.title =
      this.props.category === "general"
        ? "Home-MasterNews"
        : this.props.category + "-MasterNews";
  }

  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/everything?apiKey=ed98be453a264cc8a5ff2717760205b0&q=${this.props.category}&page=1&pageSize=${this.props.pageSize}`;
    this.props.setProgress(20);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseddata = await data.json();
    this.props.setProgress(80);
    this.setState({
      Cricketarticles: parseddata.articles,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/everything?apiKey=ed98be453a264cc8a5ff2717760205b0&q=${
      this.props.category
    }&pageSize=${this.props.pageSize}&page=${++this.state.page}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      Cricketarticles: this.state.Cricketarticles.concat(parseddata.articles),
      loading: false,
    });
  };
  render() {
    return (
      <>
        <div className="container mt-3">
          <div>
            <h3>
              {this.props.category === "general" ? "Home" : this.props.category}
            </h3>

            <div>
              <hr />
              <InfiniteScroll
                dataLength={this.state.Cricketarticles.length}
                next={this.fetchMoreData}
                hasMore={
                  this.state.Cricketarticles.length <= this.state.totalResults
                }
                loader={<Spinner />}
              >
                <div className="row">
                  {this.state.Cricketarticles.map((element) => {
                    return (
                      <div className={"col-sm-4 my-3"} key={element.url}>
                        <NewsItem
                          title={element.title}
                          description={element.description}
                          imageUrl={element.urlToImage}
                          url={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
