import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import Track from "../components/Track";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { MdAdd } from "react-icons/md";
import { likeSong, unlikeSong } from "../store/actions";
function PlaylistPage(props) {
  const [playlist, setPlaylist] = React.useState(
    props.playlists.find(
      (playlist) => playlist.id === props.match.params.playlistId
    )
  );
  // const like = () => {
  //   if (props.songs.liked.find((id) => id === track.id)) {
  //     unlikeSong(track.id);
  //   } else {
  //     likeSong(track.id);
  //   }
  // };
  // React.useEffect(() => {
  //   const item = props.playlists.find(
  //     (playlist) => playlist.id === props.match.params.playlistId
  //   );
  //   setPlaylist(item);
  //   console.log("000000", item, playlist);
  // });
  return (
    <Col
      className=" col-md-9 col-lg-10 d-md-block p-4 artist-content"
      style={{ backgroundColor: "#181818" }}
    >
      <Row className={"mt-4 ml-4"}>
        <div className={"d-flex align-items-end"}>
          <Image
            src={playlist.image}
            style={{ width: "15rem", height: "15rem", objectFit: "cover" }}
          />
          <div className={"pl-4"}>
            <h1>{playlist.name}</h1>
          </div>
        </div>
      </Row>
      <Row>
        <ul className={"list"}>
          {playlist.songs.map((track) => (
            <li>{track.title}</li>
          ))}
        </ul>
      </Row>
    </Col>
  );
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    likeSong: (id) => dispatch(likeSong(id)),
    unlikeSong: (id) => dispatch(unlikeSong(id)),
  })
)(PlaylistPage);
