import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import axios from "axios";
import "../../secrets";
//const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: []
    };

  }

  componentDidMount() {
    this.getHeadlines(this.props.domain);
  }

  getHeadlines (query) {
    axios
      .get("https://newsapi.org/v2/everything", {
        params: {
          q: query,
          domains: 'nytimes.com, theintercept.com, jacobinmag.com, thenation.com, vice.com',
          language: "en",
          apiKey: process.env.NEWS_API_KEY
        }
      })
      .then(results => {
        this.setState({
          headlines: results.data.articles.slice(0, 5)
        });
      })
      .catch(error => {
        console.log("Error in obtaining headlines", error);
      });
  }

  render() {
    return (
      <div className="Articles">
        <h2 className="headlines">Top Headlines</h2>
        {this.state.headlines.map((headline, i) => (
          <div className="single-article" >
          <h4
            key={i}
            className="article-link"
            onClick={() => {
              window.open(headline.url);
            }}
          >
            {headline.title}
          </h4>
          <p className="outlet">{headline.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Articles;
