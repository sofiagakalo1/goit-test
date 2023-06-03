import {
  Container,
  Cards,
  CardBlock,
  LogoSvg,
  Image,
  Circle,
  Line,
  Avatar,
  Info,
  InfoText,
  Button,
} from "./Card.styles";
import sprite from "../../images/icons.svg";
import picture_1x from "../../images/picture@1x.png";
import picture_2x from "../../images/picture@2x.png";
import avatar from "../../images/Hansel.png";

const Card = () => {
  const pixelRatio = window.devicePixelRatio;
  return (
    <Container>
      <Cards>
        <CardBlock>
          <LogoSvg>
            <use xlinkHref={`${sprite}#logo-icon`} fill></use>
          </LogoSvg>
          <Image src={pixelRatio === 2 ? picture_2x : picture_1x} alt="logo" />
          <Circle>
            <Avatar src={avatar} alt="avatar" />
          </Circle>
          <Line />
          <Info>
            <InfoText>777 TWEETS</InfoText>
            <InfoText>100,500 FOLLOWERS</InfoText>
          </Info>
          <Button>FOLLOW</Button>
        </CardBlock>
      </Cards>
    </Container>
  );
};

export default Card;
