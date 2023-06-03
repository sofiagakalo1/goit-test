import styled from "styled-components";

export const LogoSvg = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const Container = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 0;
`;

export const Cards = styled.ul`
  display: flex;
  justify-content: center;
`;

export const CardBlock = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 308px;
  height: 168px;
  padding: 28px 36px 18px 36px;
`;

export const Circle = styled.div`
  position: absolute;
  left: 150px;
  z-index: 2;
  width: 80px;
  height: 80px;
  top: 47%;
  left: 50%;
  transform: translate(-43%, -50%);

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Line = styled.div`
  position: absolute;
  top: 214px;
  z-index: 1;
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  display: block;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Info = styled.div`
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);

  color: #ebd8ff;
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

  background-color: #ebd8ff;
  border: none;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
