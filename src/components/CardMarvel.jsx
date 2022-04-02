import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridTotal: {
    marginTop: "50px",
  },
  card: {
    maxWidth: 350,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#B4ECE3",
    padding: "35px",
    marginBottom: "50px",
    cursor: "pointer",
    borderRadius: "10px",
  },
  media: {
    paddingTop: "56%",
    backgroundSize: "contain",
    backgroundColor: "#000000",
    borderRadius: "25px",
  },
  textCArd: {
    color: "black",
  },
});
const CardMarvel = ({ data }) => {
  const classes = useStyles();
  const ext = ".jpg";
  return (
    <Grid
      item
      xs={12}
      sm={4}
      key={`card-${data.id}`}
      className={classes.gridTotal}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={data.thumbnail.path + ext}
        />
        <CardContent>
          <Typography className={classes.textCArd} variant="h5">
            {data.name}
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            {data.id}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { CardMarvel };
