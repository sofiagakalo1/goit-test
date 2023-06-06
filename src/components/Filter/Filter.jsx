import { FilterField, List, Button } from "./Filter.styles";

const Filter = ({ selectedFilter, onFilterChange }) => {
  return (
    <FilterField>
      <List>
        <Button
          active={selectedFilter === "all" ? "true" : undefined}
          onClick={() => onFilterChange("all")}
        >
          Show all
        </Button>
        <Button
          active={selectedFilter === "follow" ? "true" : undefined}
          onClick={() => onFilterChange("follow")}
        >
          Follow
        </Button>
        <Button
          active={selectedFilter === "following" ? "true" : undefined}
          onClick={() => onFilterChange("following")}
        >
          Followings
        </Button>
      </List>
    </FilterField>
  );
};
export default Filter;
