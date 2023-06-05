import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0px auto;
  padding: 0;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 20px;
  background-color: #5cd3a8;
`;
export const LogoSvg = styled.svg`
  position: absolute;
  top: 5px;
  left: 10px;
  width: 96px;
  height: 42px;
`;
export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  alighn-items: center;
`;
export const NavLinkStyled = styled(NavLink)`
  margin: 0 10px;
  color: #ffffff;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  color: ${(props) => (props.active ? "rgb(87, 54, 163)" : "rgb(55, 55, 55)")};
  transition: color 250ms ease 0s;
  &:hover {
    color: rgb(87, 54, 163);
  }
`;
