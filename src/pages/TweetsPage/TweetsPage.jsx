import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Button, LinkStyled } from "./TweetsPage.styles.js";
import Loader from "../../components/Loader";
import TweetsList from "../../components/TweetsList/TweetsList";
import { getAllUsers } from "../../services/API/users";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 3;

  const location = useLocation();

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
    fetchUsers();
  }, [page]);

  const loadMoreUsers = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Container>
      <LinkStyled to={location.state?.from ?? "/"}>Go back</LinkStyled>
      <TweetsList users={users} />
      {error && <p>Error...</p>}
      {loading && <Loader />}
      {!loading && hasMore && (
        <Button onClick={loadMoreUsers}>Load More</Button>
      )}
    </Container>
  );
};

export default TweetsPage;