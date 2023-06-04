import { Grid } from "@mui/material";
import { CardItem } from "../CardItem/CardItem";

export const CardList = ({ list }) => {
  return (
    <Grid container spacing={2}>
      {list.map((item) => (
        <CardItem key={item._id}
          nickname={item.nickname}
          images={item.images}
          _id={item._id}
        />
      ))}
    </Grid>
  );
};
