import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useSelector } from "react-redux";
import { heros } from "../../redux/selectors";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const HeroPage = () => {
  const items = useSelector(heros);
  const { id } = useParams();
  console.log(id);
  const curHero = items.find((item) => item._id === id);

  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = curHero;
  console.log(curHero);
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {nickname}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="700"
              image={`http://localhost:5000${images}`}
              alt={nickname}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ display: "flex", flexDirection: "column", rowGap: 50 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Origin Description
                </Typography>
                <Typography>{origin_description}</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Superpowers
                </Typography>
                <Typography>{superpowers}</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Real name
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {real_name}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Catch Phrase
                </Typography>
                <Typography>{catch_phrase}</Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroPage;
