import React, { useState, useEffect } from "react";
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
  const [character, setCharacter] = useState([]);

  const getCharacter = () => {
    try {
      fetch(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6ba682d821d6c7780b1faee6dbe14ed9&hash=3b68c005c66af546ba1d65845f7a88dd"
      )
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data.data.results);
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

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
