import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 5px;
  background-color: #f3e9dd;
`;

const InputSearch = () => {
  return (
    <div>
      <form>
        <h1>Find your favorite character</h1>
        <Input type="text" placeholder="Search" />
      </form>
    </div>
  );
};

export default InputSearch;
