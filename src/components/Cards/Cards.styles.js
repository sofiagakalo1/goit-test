import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 26px;
  height: 50px;
  width: fit-content;
  padding: 14px 56px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  color: #373737;

  background-color: ${(props) => (props.following ? "#5CD3A8" : "#ebd8ff")};
  border: none;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 250ms ease;

  &:hover,
  &:active {
    background-color: ${(props) => (props.following ? "#de5d5d" : "#5CD3A8")};
  }
`;
