import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import Track from "../components/Track";
function PlaylistPage(props) {
  const [playlist, setPlaylist] = React.useState(
    props.playlists.find(
      (playlist) => playlist.id === props.match.params.playlistId
    )
  );
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
        <ul>
          {playlist.songs.map((track) => (
            <li>{track.title}</li>
          ))}
        </ul>
      </Row>
    </Col>
  );
}

export default connect((state) => ({ ...state }))(PlaylistPage);
