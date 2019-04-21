import Sound from "react-sound";

export const Types = {
  PLAY: "player/PLAY"
};

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING
};

export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PLAY:
      return { ...state, currentSong: action.payload.song, status: Sound.status.PLAYING };
    default:
      return state;
  }
}

export const Creators = {
  loadSong: song => ({ type: Types.PLAY, payload: { song } }),
};
