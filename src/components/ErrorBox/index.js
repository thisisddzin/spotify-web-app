import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../store/ducks/error";

import CloseIcon from "../../assets/images/close.svg";

import { Container } from "./styles";

const ErrorBox = ({ hideError, error: { visible, message } }) => visible && (
  <Container>
    <p>{message}</p>
    <button onClick={hideError}>
      <img src={CloseIcon} alt="Cloce icon" />
    </button>
  </Container>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch);

const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBox);

