import React, { Component } from "react";

import { Container, Header, SongList, SongItem } from "./styles";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import { Creators as PlayerActions } from "../../store/ducks/player";

import Loading from "../../components/Loading";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }),
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.node.isRequired,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string
          })
        )
      }),
      loading: PropTypes.bool
    }).isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number
    }).isRequired,
  };

  state = {
    selectedSong: null
  }

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails() {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  }

  renderPlaylistDetails = () => {
    const playlist = this.props.playlist.data;

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt="Playlist" />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}
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
            {!playlist.songs ? (
              <td>
                <td colSpan="5">Nenhuma música</td>
              </td>
            ) : (
              playlist.songs.map(song => (
                <SongItem
                  key={song.id} o
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => this.props.loadSong(song)}
                  selected={this.state.selectedSong === song.id}
                  playing={this.props.currentSong && this.props.currentSong.id === song.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:23</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    return this.props.playlist.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderPlaylistDetails()
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    ...PlaylistDetailsActions,
    ...PlayerActions
  }, dispatch);

const mapStateToProps = state => ({
  playlist: state.playlistDetails,
  currentSong: state.player.currentSong
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
