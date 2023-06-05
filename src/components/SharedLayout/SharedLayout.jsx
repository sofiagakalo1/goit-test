import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import sprite from "../../images/icons.svg";
import {
  Container,
  LogoSvg,
  Header,
  Navigation,
  NavLinkStyled,
} from "./SharedLayout.styles";
const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <LogoSvg>
          <use xlinkHref={`${sprite}#logo-icon`} fill="#471CA9"></use>
        </LogoSvg>
        <Navigation>
          <NavLinkStyled to="/" active={location.pathname === "/"}>
            Home
          </NavLinkStyled>
          <NavLinkStyled
            to="/tweets"
            active={location.pathname === "/tweets"}
            state={{ from: location }}
          >
            Tweets
          </NavLinkStyled>
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
