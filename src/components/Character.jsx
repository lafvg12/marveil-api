import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { CardMarvel } from "./CardMarvel";
import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Div2 = styled.div`
  display: flex;
  margin-left: 50px;
`;

const Character = () => {
  const URL = process.env.REACT_APP_API_KEY_MARVEL;
  const [character, setCharacter] = useState([]);

  const getCharacter = () => {
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.data.results);
      });
  };

  // useEffect(() => {
  //   getCharacter();
  // }, []);

  return (
    <Div>
      <Div2>
        <Grid container spacing={2}>
          {character.map((characters) => (
            <CardMarvel key={character.id} data={characters} />
          ))}
        </Grid>
      </Div2>
    </Div>
  );
};

export { Character };
