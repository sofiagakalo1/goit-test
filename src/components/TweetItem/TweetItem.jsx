import {
  Card,
  LogoSvg,
  Image,
  AvatarWrapper,
  Info,
  InfoText,
  Button,
  ImagesWrapper,
  UserInfoWrapper,
} from "./TweetItem.styles";
import { useState } from "react";
import { addFollower, deleteFollower } from "../../services/API/users";
import sprite from "../../images/icons.svg";
import picture_1x from "../../images/picture@1x.png";
import picture_2x from "../../images/picture@2x.png";
import avatarPlug from "../../images/Hansel.png";

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const TweetItem = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(user.isFollowed ?? false);
  const [followers, setFollowers] = useState(user.followers);
  const pixelRatio = window.devicePixelRatio;

  const formattedFollowers = formatNumberWithCommas(followers);

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
    <Card key={user.id}>
      <ImagesWrapper>
        <LogoSvg>
          <use xlinkHref={`${sprite}#logo-icon`}></use>
        </LogoSvg>
        <Image src={pixelRatio === 2 ? picture_2x : picture_1x} alt="logo" />
      </ImagesWrapper>
      <UserInfoWrapper>
        <AvatarWrapper>
          <img src={user.avatar || avatarPlug} alt="avatar" />
        </AvatarWrapper>
        <Info>
          <InfoText>{user.tweets} TWEETS</InfoText>
          <InfoText>{formattedFollowers} FOLLOWERS</InfoText>
        </Info>
      </UserInfoWrapper>
      <Button
        onClick={isFollowed ? onUnfollowClick : onFollowClick}
        following={isFollowed}
      >
        {isFollowed ? "UNFOLLOW" : "FOLLOW"}
      </Button>
    </Card>
  );
};

export default TweetItem;
