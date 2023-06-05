import { Container, CardsList, Button } from "./Cards.styles";
import Loader from "../Loader";
import Card from "../Card/Card";

import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/API/users";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 3;

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

  const elements = users.map((user) => {
    return <Card user={user} />;
  });
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
