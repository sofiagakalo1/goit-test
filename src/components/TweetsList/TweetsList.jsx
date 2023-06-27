import { CardsList } from "./TweetsList.styles";
import TweetItem from "../TweetItem/TweetItem";

const TweetsList = ({ users }) => {
  if (users.length < 1) return <p>There are no users</p>;
  const elements = users.map((user) => {
    return <TweetItem key={user.id} user={user} />;
  });
  return <CardsList>{elements}</CardsList>;
};

export default TweetsList;
