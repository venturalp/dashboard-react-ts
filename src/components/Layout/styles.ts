import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
  "AS MH"
  "AS CT";
`
