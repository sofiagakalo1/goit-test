import {
  Container,
  CardsList,
  CardBlock,
  LogoSvg,
  Image,
  Circle,
  Line,
  Avatar,
  Info,
  InfoText,
  Button,
} from "./Cards.styles";
import sprite from "../../images/icons.svg";
import picture_1x from "../../images/picture@1x.png";
import picture_2x from "../../images/picture@2x.png";
import avatarPlug from "../../images/Hansel.png";

import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/API/users";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pixelRatio = window.devicePixelRatio;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getAllUsers();
        // console.log("fetch users------->",response);
        setUsers(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length === 0) {
      const storedUsers = localStorage.getItem("users");
      console.log("storedUsers:", storedUsers);
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    console.log("updated users:", users);
  }, [users]);

  const onFollowClick = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.followers + 1,
          };
        }
        return user;
      });
    });
  };
  const elements = users.map(({ id, user, tweets, followers, avatar }) => {
    if (avatar) {
      return (
        <CardBlock key={id}>
          <LogoSvg>
            <use xlinkHref={`${sprite}#logo-icon`} fill></use>
          </LogoSvg>
          <Image src={pixelRatio === 2 ? picture_2x : picture_1x} alt="logo" />
          <Circle>
            <Avatar src={avatar} alt="avatar" />
          </Circle>
          <Line />
          <Info>
            <InfoText>{tweets} TWEETS</InfoText>
            <InfoText>{followers} FOLLOWERS</InfoText>
          </Info>
          <Button onClick={() => onFollowClick(id)}>FOLLOW</Button>
        </CardBlock>
      );
    } else {
      return (
        <CardBlock key={id}>
          <LogoSvg>
            <use xlinkHref={`${sprite}#logo-icon`} fill></use>
          </LogoSvg>
          <Image src={pixelRatio === 2 ? picture_2x : picture_1x} alt="logo" />
          <Circle>
            <Avatar src={avatarPlug} alt="avatar" />
          </Circle>
          <Line />
          <Info>
            <InfoText>{tweets} TWEETS</InfoText>
            <InfoText>{followers} FOLLOWERS</InfoText>
          </Info>
          <Button onClick={() => onFollowClick(id)}>FOLLOW</Button>
        </CardBlock>
      );
    }
  });
  return (
    <Container>
      <CardsList>
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {elements}
      </CardsList>
    </Container>
  );
};

export default Cards;
