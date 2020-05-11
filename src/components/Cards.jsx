import React from "react";
import { Grid } from "semantic-ui-react";
import CardItems from "./CardItems";

const Cards = (props) => {
  return (
    <Grid columns={4} stretched>
      <Grid.Row>
        {props.monsters.map((monster) => (
          <CardItems key={monster.id} monster={monster}></CardItems>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default Cards;
