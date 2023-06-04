import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeros } from "../../redux/operations";
import { heros } from "../../redux/selectors";
import { CardList } from "../../components/CardList/CardList";
import { Button, Container } from "@mui/material";
import { incrementPage } from "../../redux/slices/hero";
import styles from "./Home.module.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(heros);
  const page = useSelector(state=>state.hero.page);

  useEffect(() => {
    console.log(page);
    dispatch(fetchHeros(page));
  }, [page]);

  const loadMore = () =>{
    dispatch(incrementPage());
  }

  return (
    <Container>
      <CardList list={items} />
      <div style={{ display: "flex", justifyContent: "center", marginTop:20 }}>
        <Button variant="contained" size="large" onClick={loadMore}>
          Load more
        </Button>
      </div>
    </Container>
  );
};
