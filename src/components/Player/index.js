import React, { Fragment } from "react";

import Slider from "rc-slider";

import Sound from "react-sound";

import { connect } from "react-redux";
import { Creators as playerActions } from "../../store/ducks/player";

import PropTypes from "prop-types";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

import EminemCover from "../../assets/covers/eminem.jpg";
import { bindActionCreators } from "redux";


const Player = ({ player: { currentSong, status }, playSong, pauseSong }) => (
  <Container>
    {!!currentSong && (
      <Sound
        url={currentSong.file}
        playStatus={status}
      />
    )}

    <Current>
      {!!currentSong && (
        <Fragment>
          <img src={currentSong.thumbnail} alt="Current Album" />
          <div>
            <span>{currentSong.title}</span>
            <small>{currentSong.author}</small>
          </div>
        </Fragment>
      )}

    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!currentSong && status === Sound.status.PLAYING ? (
          <button onClick={pauseSong}>
          <img src={PauseIcon} alt="Pause" />
        </button>
        ) : (
          <button onClick={playSong}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}
        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            tracksStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:29</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        tracksStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  currentSong: PropTypes.shape({
    file: PropTypes.string,
    thumbnail: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  status: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  player: state.player
})

const mapDispatchToProps = dispatch => bindActionCreators(playerActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Player);
