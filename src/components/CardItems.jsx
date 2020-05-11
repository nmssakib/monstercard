import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

const CardItems = (props) => {
  return (
    <Grid.Column computer={4} tablet={8} style={{ paddingBottom: "2rem" }}>
      <Card fluid className="PadY">
        <Image
          src={`https://robohash.org/${props.monster.id}?set=set2`}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{props.monster.name}</Card.Header>
          <Card.Meta> {props.monster.phone}</Card.Meta>
          <Card.Description>{props.monster.address.city}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user"></Icon>
          {props.monster.website}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default CardItems;
