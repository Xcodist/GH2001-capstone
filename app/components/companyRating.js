import React from "react";
import frown from "../../chrome/icons/frown.png";
import smile from "../../chrome/icons/wink.png";
import neutral from "../../chrome/icons/neutral.png";
import { connect } from "react-redux";

const HasRating = props => {
  let emoji = "";
  let style = "";
  console.log(props.state.company);
  const company = props.state.company;
  if (company.name) {
    let name = company.name;
    let newName = "";
    for (let i = 0; i < name.length; i++) {
      if (i > 0 && name[i - 1] === " ") {
        newName += name[i].toUpperCase();
      } else if (i === 0) {
        newName += name[i].toUpperCase();
      } else {
        newName += name[i];
      }
    }
    company.name = newName;

    if (company.rating > 60) {
      emoji = smile;
      style = "#0C7C59";
    } else if (company.rating > 50) {
      emoji = neutral;
      style = "#D67F33";
    } else {
      emoji = frown;
      style = "#2B303A";
    }
  }

  return company.name ? (
    <div>
      <div className="header">
        {company.name}
        <br></br>
        <br></br>
        <div className="ratingbody" style={{ background: style }}>
          <img className="ratingemoji" src={emoji} />
          <div className="ratingnum">
            Company<br></br>Rating: <span>{company.rating}</span>
          </div>
        </div>
        <br></br>
        <p className="ratingexpl">
          This is CRS Hub's rating of <span>{company.name}</span>. CSR Hub
          offers transparent ratings on a scale from 0 to 100, and rankings of
          19,184 companies from 143 countries, driven by 662 industry-leading
          CSR/ESG data sources, including ESG analyst, crowd, government,
          publication, and and not-for-profit data. For more information, visit
          <a href="https://www.csrhub.com/"> CSRHUB.com</a>
        </p>
        <p className="ratingexpl">{props.state.subsidiary.name} is a subsidiary of {company.name}. Other {company.name} subsidiaries include {company.subsidiaries.map((obj) => {
          return obj.name
        })
        .join(', ')}</p>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(HasRating);
