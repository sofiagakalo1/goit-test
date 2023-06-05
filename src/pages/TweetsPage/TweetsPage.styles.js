import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  background-color: #5CD3A8;
  border: none;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 250ms ease;

  &:hover,
  &:active {
    background-color:#de5d5d};
  }
`;
