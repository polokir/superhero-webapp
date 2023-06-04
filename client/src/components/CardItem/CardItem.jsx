import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { deleteHero } from "../../redux/operations";
import { Link } from "react-router-dom";

export const CardItem = ({ _id, nickname, images }) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(deleteHero(_id));
  };
  return (
    <Card sx={{ width: 354 }}>
      <Link to={`/hero/${_id}`}>
        <CardMedia
          sx={{ height: 448 }}
          image={
            `http://localhost:5000${images}` ||
            "https://fundatia.moldcell.md/wp-content/themes/consultix/images/no-image-found-360x250.png"
          }
          title="green iguana"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nickname}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/hero/add-edit/${_id}`}>
          <Button size="small">Update</Button>
        </Link>
        <Button onClick={onClickRemove} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
