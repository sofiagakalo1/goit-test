import { FilterField, List, Button } from "./Filter.styles";

const Filter = ({ selectedFilter, onFilterChange }) => {
  return (
    <FilterField>
      <List>
        <Button
          active={selectedFilter === "all"}
          onClick={() => onFilterChange("all")}
        >
          Show all
        </Button>
        <Button
          active={selectedFilter === "follow"}
          onClick={() => onFilterChange("follow")}
        >
          Follow
        </Button>
        <Button
          active={selectedFilter === "following"}
          onClick={() => onFilterChange("following")}
        >
          Followings
        </Button>
      </List>
    </FilterField>
  );
};
export default Filter;
