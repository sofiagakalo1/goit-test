import styled from "styled-components";

export const FilterField = styled.div``;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;
  background-color: ${(props) =>
    props.active === "true" ? "rgb(71, 28, 169)" : "rgb(235, 216, 255)"};
  border: 1px solid rgb(71, 28, 169);
  color: ${(props) =>
    props.active === "true" ? "rgb(235, 216, 255)" : "rgb(55, 55, 55)"};
  &:hover {
    background-color: rgb(71, 28, 169);
    color: rgb(235, 216, 255);
  }
`;
