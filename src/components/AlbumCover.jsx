import React, { Component } from "react";
import { Col, Image, Button } from "react-bootstrap";
import { connect } from "react-redux";
class AlbumCover extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   album: {},
    // };
  }
  // componentWillMount = () => {
  //   //this.props.fetchAlbum()
  //   // this.setState({
  //   //   album: this.props.album,
  //   // });
  // };
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.singleAlbum !== this.props.singleAlbum) {
  //     this.setState({
  //       album: this.props.album,
  //     });
  //   }
  // };

  render() {
    const { singleAlbum } = this.props;

    return (
      <Col className="col-sm-12 col-lg-5 album-cover">
        <div className="image-wrapper mt-5 d-flex flex-column align-items-center justify-content-center">
          <Image
            src={singleAlbum.cover_big}
            alt="..."
            className="img-thumbnail p-0 border-0 rounded-0"
            style={{
              height: "20rem",
              objectFit: "cover",
              transition: "all 0.1s linear",
              boxShadow: "0 1px 5px rgba(0,0,0,.53)",
            }}
          />
          <span
            className="text-center"
            style={{ color: "#93A0B0", fontSize: "1rem" }}
          >
            {singleAlbum.title}
          </span>
          {/*<span className=" pt-0" style={{color: "#93A0B0", fontSize: "1rem"}}>{album.artist.name}</span>*/}
          <Button
            type="button"
            className="btn btn-success rounded-pill mt-3 mb-2 "
            style={{ padding: "5px 50px", fontSize: "1.2rem" }}
          >
            Album List
          </Button>
          <span
            className="mt-5 "
            style={{ color: "#93A0B0", fontSize: "2rem" }}
          >
            <i className="fas fa-heart ml-1 "></i>
          </span>
        </div>
      </Col>
    );
  }
}

export default connect((state) => ({ ...state }))(AlbumCover);
