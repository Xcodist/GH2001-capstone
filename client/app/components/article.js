import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import axios from "axios";
const key = '8ebb8b90761f4f99ad3a801a159de0ce';
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
          apiKey: key
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
        <h2 className="cartTitle">Top Headlines<img src="https://cdn.onlinewebfonts.com/svg/img_573740.png" width="30px"/></h2>
        {this.state.headlines.map((headline, i) => (
          <div className="single-article" >

          <p
            key={i}
            className="article-link"
            onClick={() => {
              window.open(headline.url);
            }}
          >
            <img className="artListItem" src="https://image.flaticon.com/icons/png/512/38/38311.png" width="10px" />
            {headline.title}
          </p>
          <p className="outlet">{headline.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;
