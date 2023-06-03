import React from "react";
import { Circles } from "react-loader-spinner";
import { Container } from "./Loader.styles";

const Loader = () => {
  return (
    <Container>
      <Circles
        height="80"
        width="80"
        color="#5CD3A8"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};

export default Loader;
