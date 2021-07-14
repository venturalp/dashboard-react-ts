import styled, { css } from "styled-components";

export const Container = styled.div(({ theme }) => css`
  &>select {
    padding: 7px 10px;
    border-radius: 5px;
    margin-left: 7px;
  }
`)
