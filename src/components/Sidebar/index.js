import React, { Component } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, NewPlayList, Nav } from "./styles";

import AddPlayListIcon from "../../assets/images/add_playlist.svg";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
        })
      )
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="">Navegar</Link>
            </li>
            <li>
              <Link to="">Rádio</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <Link to={() => {}}>Seu Daily MIx</Link>
            </li>
            <li>
              <Link to={() => {}}>Tocadas recentemente</Link>
            </li>
            <li>
              <Link to={() => {}}>Músicas</Link>
            </li>
            <li>
              <Link to={() => {}}>Álbums</Link>
            </li>
            <li>
              <Link to={() => {}}>Artistas</Link>
            </li>
            {/* <li>
              <Link to={() => {}}>Estações</Link>
            </li>
            <li>
              <Link to={() => {}}>Arquivos locais</Link>
            </li>
            <li>
              <Link to={() => {}}>Vídeos</Link>
            </li>
            <li>
              <Link to={() => {}}>Podcasts</Link>
            </li> */}
          </Nav>
          <Nav>
            <li>
              <span>Playlist</span>
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlayList>
          <img src={AddPlayListIcon} alt="Adicionar playlist" /> Nova Playlist
        </NewPlayList>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
