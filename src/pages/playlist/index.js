import React from "react";

import { Container, Header, SongList } from "./styles";

import EminemCover from "../../assets/covers/eminem.jpg";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

console.tron.log("teste");

const Playlist = () => (
  <Container>
    <Header>
      <img src={EminemCover} alt="Playlist" />
      <div>
        <span>PLAYLIST</span>
        <h1>Rap raiz</h1>
        <p>22 músicas</p>
        <button>PLAY</button>
      </div>
    </Header>
    <SongList>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Clean out</td>
          <td>Eminem</td>
          <td>Marsshal Metter</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Clean out</td>
          <td>Eminem</td>
          <td>Marsshal Metter</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Clean out</td>
          <td>Eminem</td>
          <td>Marsshal Metter</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Clean out</td>
          <td>Eminem</td>
          <td>Marsshal Metter</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Clean out</td>
          <td>Eminem</td>
          <td>Marsshal Metter</td>
          <td>3:23</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
