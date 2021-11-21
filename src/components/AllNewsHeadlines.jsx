import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsCss from "../css/News.module.css";

export class AllNewsHeadlines extends Component {
  constructor() {
    super();
    this.state = {
      AllArticles: [],
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className={NewsCss.mid}>Latest-News And Updates</h3>

          <div className="row">
            {this.state.AllArticles.map((element) => {
              return (
                <div className={"col-sm-4 my-3"} key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  async componentDidMount() {
    // let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ed98be453a264cc8a5ff2717760205b0';
    let url =
      "https://newsapi.org/v2/everything?apiKey=ed98be453a264cc8a5ff2717760205b0&q=global";

    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ AllArticles: parseddata.articles });
  }
}

export default AllNewsHeadlines;
