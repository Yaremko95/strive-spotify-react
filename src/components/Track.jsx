import React from "react";
import { connect } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { likeSong, unlikeSong } from "../store/actions";
function Track({ track, songs, likeSong, unlikeSong }) {
  const like = () => {
    if (songs.liked.find((id) => id === track.id)) {
      unlikeSong(track.id);
    } else {
      likeSong(track.id);
    }
  };

  return (
    <li className="d-flex  mb-3 justify-content-between">
      <div className="d-flex flex-column">
        <div>
          {songs.liked.find((id) => id === track.id) ? (
            <AiFillHeart onClick={like} style={likeBtn} />
          ) : (
            <AiOutlineHeart onClick={like} style={likeBtn} />
          )}
          <span className="song-title">
            <i className="fa fa-music mr-2"></i>
            {track.title}
          </span>
        </div>
        <span className="ml-4 pt-0" style={{ color: "#93A0B0" }}>
          {track.artist.name}
        </span>
      </div>
      <span className="mr-3">{track.duration / 100}</span>
    </li>
  );
}
const likeBtn = {
  cursor: "pointer",
  fontSize: "20px",
};

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    likeSong: (id) => dispatch(likeSong(id)),
    unlikeSong: (id) => dispatch(unlikeSong(id)),
  })
)(Track);
