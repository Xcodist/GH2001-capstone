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
import {addToWishlistThunk} from '../store/wishlist'

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: 120,
    width: 200,
    paddingLeft: 30,
    alignContent: "space-around",
    alignItems: "center",
    lineHeight: 1.4
  },
  content: {
    flex: "0 1 auto",
  },
  cover: {
    height: 180,
    width: "100%",
    objectFit: "contain",
  },
  card: {
    height: "100%",
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
  }
  }
));

const CartItems = (props) => {
  console.log(props);
  const { title, thumbnail, link, snippet, source, price } = props.alternative;
  const { user, addToWishlistThunk } = props;

  // const handleSubmit = (event, alternative, user) => {
  //   event.preventDefault();
  //   addToWishlistThunk(alternative, user);
  // };

  return title ? (
    <Card key={title} className={useStyles().card}>
    <CardMedia
        image={thumbnail}
        title={title}
        className={useStyles().cover}
    />
    <CardContent className={useStyles().details}>
        <Typography variant="subtitle2">
        <bold>{title}</bold>
        </Typography>
        <Typography variant="p" color="textSecondary">
        <em>Buy from {source}: </em>
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
        
          <div className={useStyles().button}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => {
                // console.log('this is userId', user.id)
                // console.log("this is alternative" , props.alternative)
                props.addToWishlist(props.alternative, user)
              }}
            >
              Add to Wishlist
            </Button>
          </div>
      </CardContent>
    </Card>
  ) : (
    <Typography variant="subtitle2">Loading...</Typography>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: (alternative, user) =>
    dispatch(addToWishlistThunk(alternative, user)),
});

export default connect(null, mapDispatchToProps)(CartItems);
