import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  transition: opacity .3s;
  margin: 7px 0;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.text.pxToRem(18)};
  & svg {
    margin-right: 5px;
  }
  &:hover {
    opacity: 0.7;
  }
`
