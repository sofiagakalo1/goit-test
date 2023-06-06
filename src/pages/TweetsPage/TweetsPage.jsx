import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Button, LinkStyled, ButtonsStyled } from "./TweetsPage.styles.js";
import Loader from "../../components/Loader";
import TweetsList from "../../components/TweetsList/TweetsList";
import Filter from "../../components/Filter/Filter.jsx";
import { getAllUsers } from "../../services/API/users";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  useEffect(() => {
    const filteredList = users.filter((user) => {
      if (selectedFilter === "all") {
        return true;
      } else if (selectedFilter === "follow") {
        return !user.isFollowed;
      } else if (selectedFilter === "following") {
        return user.isFollowed;
      }
      return null;
    });
    setFilteredUsers(filteredList);
  }, [selectedFilter, users]);

  const loadMoreUsers = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (selectedFilter) => {
    setSelectedFilter(selectedFilter);
  };

  return (
    <Container>
      <ButtonsStyled>
      <LinkStyled to={location.state?.from ?? "/"}>Go back</LinkStyled>
      <LinkStyled onClick={handleFilterClick}>Filter</LinkStyled>
      </ButtonsStyled>
      {isFilterOpen && (
        <Filter
          onFilterChange={handleFilterChange}
          selectedFilter={selectedFilter}
        />
      )}
      <TweetsList users={filteredUsers} />
      {error && <p>Error...</p>}
      {loading && <Loader />}
      {!loading && hasMore && (
        <Button onClick={loadMoreUsers}>Load More</Button>
      )}
    </Container>
  );
};

export default TweetsPage;
