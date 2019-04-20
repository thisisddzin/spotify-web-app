import React from "react";

import { Container, Title, List, Playlist } from "./styles";

import EminemCover from "../../assets/covers/eminem.jpg";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img src={EminemCover} alt="Thumbnail" />
        <strong>Rap raiz</strong>
        <p>As melhores do rap raiz.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src={EminemCover} alt="Thumbnail" />
        <strong>Rap raiz</strong>
        <p>As melhores do rap raiz.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src={EminemCover} alt="Thumbnail" />
        <strong>Rap raiz</strong>
        <p>As melhores do rap raiz.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src={EminemCover} alt="Thumbnail" />
        <strong>Rap raiz</strong>
        <p>As melhores do rap raiz.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src={EminemCover} alt="Thumbnail" />
        <strong>Rap raiz</strong>
        <p>As melhores do rap raiz.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
