import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // we can also use this as well
    // let title = this.props;
    // let description = this.props;

    let { title, description, imageUrl, url, author, date, source } =
      this.props;
    return (
      <>
        {/* style={{ width: "18rem" }} */}
        <div className="card">
          <div
            style={{           
              position: "absolute",
              right: "0%",
            }}
          >
            <span className="badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>

          <img src={imageUrl} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 70)}</h5>
            <p className="card-text">{description.slice(0, 40)}</p>
            <p className="card-text">
              <small className="text-muted">
                by {author} published at {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              className="btn btn-sm btn-outline-danger"
            >
              read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
