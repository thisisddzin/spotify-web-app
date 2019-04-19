import React, { Component } from "react";

import "./config/reactotron";

import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <Header />
                <Routes />
              </Content>
            </Container>
            <Player />
          </Wrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
