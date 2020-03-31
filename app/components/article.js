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
    console.log("state", this.state);
    console.log("props", this.props);
    return (
      <div className="App">
        <h1 className="App-title">{this.state.domain}</h1>
        Top Headlines:
        {this.state.headlines.map((headline, i) => (
          <h4
            key={i}
            className="link"
            onClick={() => {
              window.open(headline.url);
            }}
          >
            {headline.title}
          </h4>
        ))}
      </div>
    );
  }
}
export default Articles;
