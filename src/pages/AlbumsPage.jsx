import React, { Component } from "react";
import { Col } from "react-bootstrap";
import AlbumJumbotron from "../components/AlbumJumbotron";
import Gallery from "../components/Gallery";
import { connect } from "react-redux";
import { fetchData } from "../store/actions";
import LoginModal from "../components/auth/LoginModal";
class AlbumsPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   albums: [],
    // };
  }
  componentDidMount() {
    this.props.fetchData(
      "https://deezerdevs-deezer.p.rapidapi.com/",

      "album",
      true,
      "queen",
      0
    );
  }
  // fetchAlbums = async () => {
  //   let response = await fetch(
  //     `https://deezerdevs-deezer.p.rapidapi.com/search?q=queen`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  //         "x-rapidapi-key":
  //           "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
  //       },
  //     }
  //   );
  //   if (response.ok) {
  //     let albums = await response.json();
  //     this.setState({
  //       albums: albums.data,
  //     });
  //     console.log(this.state.albums);
  //   }
  // };

  render() {
    return (
      <>
        <Col
          className=" col-md-9 col-lg-10 d-md-block p-0 artist-content"
          style={{ backgroundColor: "#181818" }}
        >
          <AlbumJumbotron />
          <Gallery
            title={"Albums"}
            fetchAlbums={(endpoint, param, value, key) =>
              this.props.fetchData(endpoint, param, value, key)
            }
            // list={this.props.albums}
          />
        </Col>
      </>
    );
  }
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    fetchData: (endpoint, param, search, value, index, id) =>
      dispatch(fetchData(endpoint, param, search, value, index, id)),
  })
)(AlbumsPage);
