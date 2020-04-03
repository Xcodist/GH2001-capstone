import React from 'react'
import frown from "../../chrome/icons/download.png";
import smile from "../../chrome/icons/smily.png";
import neutral from "../../chrome/icons/neutral.png";

const HasRating = props => {
  let emoji = ''

  const company = props.company;
  let name = company.name
  let newName = ''
  for (let i = 0; i < name.length; i++) {
    if (i > 0 && name[i-1] === " ") {
      newName += name[i].toUpperCase()
    } else if (i === 0) {
      newName += name[i].toUpperCase()
    } else {
      newName += name[i]
    }
  }
  company.name = newName

  if (company.rating > 60) {
    emoji = smile
  } else if (company.rating > 50) {
    emoji = neutral
  } else {
    emoji = frown
  }

  return (
    <div>
      <div className="header">
        {company.name}<br></br><br></br>
        <img className='ratingemoji' src={emoji}/><br></br><br></br>
        <span>{company.rating}</span>
        <br></br>
      </div>

      <p className="ratingexpl">
        This is CRS Hub's rating of <span>{company.name}</span>. CSR Hub offers transparent
        ratings and rankings of 19,184 companies from 143 countries, driven by
        662 industry-leading CSR/ESG data sources, including ESG analyst, crowd,
        government, publication, and and not-for-profit data. For more
        information, visit
        <a href="https://www.csrhub.com/"> CSRHUB.com</a>
      </p>
    </div>
  );
};

export default HasRating
