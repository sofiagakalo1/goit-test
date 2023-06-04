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
import Loader from "../Loader";

import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/API/users";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 3;
  const pixelRatio = window.devicePixelRatio;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getAllUsers(page, pageSize);

        if (page === 1) {
          setUsers(response);
        } else {
          setUsers((prevUsers) => [...prevUsers, ...response]);
        }

        if (response.length < pageSize) {
          setHasMore(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (page > 1) {
      fetchUsers();
    }
    const storedUsers = localStorage.getItem("users");
    if (!storedUsers) {
      fetchUsers();
    }
  }, [page]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const onFollowClick = (id) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.followers + 1,
            following: true,
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };
  const onUnFollowClick = (id) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.followers - 1,
            following: false,
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const loadMoreUsers = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  console.log("users:", users);
  const elements = users.map(
    ({ id, user, tweets, followers, avatar, following }) => {
      return (
        <CardBlock key={id}>
          <LogoSvg>
            <use xlinkHref={`${sprite}#logo-icon`} fill></use>
          </LogoSvg>
          <Image src={pixelRatio === 2 ? picture_2x : picture_1x} alt="logo" />
          <Circle>
            <Avatar src={avatar || avatarPlug} alt="avatar" />
          </Circle>
          <Line />
          <Info>
            <InfoText>{tweets} TWEETS</InfoText>
            <InfoText>{followers} FOLLOWERS</InfoText>
          </Info>
          {following ? (
            <Button onClick={() => onUnFollowClick(id)} following={following}>
              UNFOLLOW
            </Button>
          ) : (
            <Button onClick={() => onFollowClick(id)} following={following}>
              FOLLOW
            </Button>
          )}
        </CardBlock>
      );
    }
  );
  return (
    <Container>
      <CardsList>
        {error && <p>Error...</p>}
        {elements}
      </CardsList>
      {loading && <Loader />}
      {!loading && hasMore && (
        <Button onClick={loadMoreUsers}>Load More</Button>
      )}
    </Container>
  );
};

export default Cards;
