import React from "react";

import CloseIcon from "../../assets/images/close.svg";

import { Container, Button } from "./styles";

const ErrorBox = () => (
  <Container>
    <p>Mensagem de error</p>
    <Button>
      <img src={CloseIcon} alt="Cloce icon" />
    </Button>
  </Container>
);

export default ErrorBox;
