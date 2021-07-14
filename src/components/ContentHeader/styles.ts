import styled, { css } from "styled-components";

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div(({ theme }) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`)
export const TitleCointainer = styled.div<ITitleContainerProps>(({ theme, lineColor }) => css`
  & > h1 {
    color: ${theme.colors.white};
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${lineColor};
    }
  }
`)

export const Controllers = styled.div(({ theme }) => css`
  display: flex;
`)
