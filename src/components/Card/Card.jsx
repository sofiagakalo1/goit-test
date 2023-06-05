import {
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
import { useState } from "react";
import { addFollower, deleteFollower } from "../../services/API/users";
import sprite from "../../images/icons.svg";
import picture_1x from "../../images/picture@1x.png";
import picture_2x from "../../images/picture@2x.png";
import avatarPlug from "../../images/Hansel.png";

const Card = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(user.isFollowed ?? false);
  const [followers, setFollowers] = useState(user.followers);
  const pixelRatio = window.devicePixelRatio;

  const onFollowClick = () => {
    try {
      setIsFollowed(true);
      setFollowers((prevFollowers) => prevFollowers + 1);
      addFollower(user.id, followers + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onUnfollowClick = () => {
    try {
      setIsFollowed(false);
      setFollowers((prevFollowers) => prevFollowers - 1);
      deleteFollower(user.id, followers - 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CardBlock key={user.id}>
      <LogoSvg>
        <use xlinkHref={`${sprite}#logo-icon`} fill></use>
      </LogoSvg>
      <Image src={pixelRatio === 2 ? picture_2x : picture_1x} alt="logo" />
      <Circle>
        <Avatar src={user.avatar || avatarPlug} alt="avatar" />
      </Circle>
      <Line />
      <Info>
        <InfoText>{user.tweets} TWEETS</InfoText>
        <InfoText>{followers.toLocaleString()} FOLLOWERS</InfoText>
      </Info>
      <Button
        onClick={isFollowed ? onUnfollowClick : onFollowClick}
        following={isFollowed}
      >
        {isFollowed ? "UNFOLLOW" : "FOLLOW"}
      </Button>
    </CardBlock>
  );
};

export default Card;
