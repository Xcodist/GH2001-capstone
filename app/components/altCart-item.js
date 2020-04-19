import React from "react";
import {
  Button,
  makeStyles,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { connect } from "react-redux";


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: 180,
    width: 200,
    paddingLeft: 30,
  },
  content: {
    flex: "0 1 auto",
  },
  cover: {
    width: 240,
  },
  card: {
    height: "100%",
    maxWidth: 500,
    display: "flex",
    flexDirection: "row",
    // lineHeight: 1.1
  },
}));

const CartItems = (props) => {
    console.log(props)
  const { title, thumbnail, link, snippet, source, price } = props.alternative;
  const { user, addToWishlistThunk } = props;

  const handleSubmit = (event, alternative, user) => {
    event.preventDefault();
    addToWishlistThunk(alternative, user);
  }

  return title ? (
    <Card key={title} className={useStyles().card}>
      <CardMedia
        image={thumbnail}
        title={title}
        className={useStyles().cover}
      />
      <div>
        <CardContent className={useStyles().details}>
          <Typography variant="subtitle2">
            <bold>{title}</bold>
          </Typography>
          <Typography variant="p" color="textSecondary">
          <br/>  
            <em>Buy from {source}:</em>
            <br />
            {price}
          </Typography>
          {/* <br />
          <Typography variant="p">
            <em>{snippet}</em>
          </Typography> */}
          <br />
          <div className={useStyles().button}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={(event) => {
                window.open(link);
              }}
            >
              Buy now
            </Button>
          </div>
{/* 
          <div className={useStyles().button}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={handleSubmit(event, props.alternative, user)}
            >
              Add to Wishlist
            </Button>
          </div> */}
        </CardContent>
      </div>
    </Card>
  ) : (
    <Typography variant="subtitle2">Loading...</Typography>
  );
};

const mapDispatchToProps = (dispatch) => ({
    addToWishlistThunk: (alternative, user) =>
      dispatch(addToWishlistThunk(alternative, user)),
  });

export default connect(null, mapDispatchToProps)(CartItems);
