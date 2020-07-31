import React from "react";
import { connect } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { likeSong, unlikeSong, addSongToPlaylist } from "../store/actions";
import { GrFormAdd } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
function Track({
  track,
  songs,
  likeSong,
  unlikeSong,
  playlists,
  addToPlaylist,
}) {
  const like = () => {
    if (songs.liked.find((id) => id === track.id)) {
      unlikeSong(track.id);
    } else {
      likeSong(track.id);
    }
  };
  const add = (playlistId, songId) => {
    addToPlaylist(playlistId, songId);
  };

  return (
    <li className="d-flex  mb-3 justify-content-between">
      <div className="d-flex flex-column">
        <div className={"d-flex align-items-center justify-content-center"}>
          {songs.liked.find((id) => id === track.id) ? (
            <AiFillHeart onClick={like} style={likeBtn} />
          ) : (
            <AiOutlineHeart onClick={like} style={likeBtn} />
          )}

          <Dropdown>
            <Dropdown.Toggle variant={"outlined"} style={likeBtn}>
              <MdAdd />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {playlists.map((playlist) => (
                <Dropdown.Item
                  key={playlist.id}
                  onClick={() => add(playlist.id, track.id)}
                >
                  {playlist.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <span className="song-title">
            <i className="fa fa-music mr-2"></i>
            {track.title}
          </span>
        </div>
        <span className="pt-0" style={{ color: "#93A0B0", marginLeft: "90px" }}>
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
  color: "whitesmoke",
};

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    likeSong: (id) => dispatch(likeSong(id)),
    unlikeSong: (id) => dispatch(unlikeSong(id)),
    addToPlaylist: (playlistId, songId) =>
      dispatch(addSongToPlaylist(playlistId, songId)),
  })
)(Track);
