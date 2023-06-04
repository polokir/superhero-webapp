import React from "react";
import Button from "@mui/material/Button";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>SUPER HERO APP</div>
          </Link>
          <div className={styles.buttons}>
            <Link to='/hero/add'>
             <Button>
                Add Hero
            </Button>
            </Link>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;