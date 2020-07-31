import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

import Track from "./Track";
class TrackList extends Component {
  constructor(props) {
    super(props);
    // this.state ={
    //
    //     tracks:[]
    // }
  }
  // componentWillMount= ()=> {
  //     //this.props.fetchAlbum()
  //     this.setState({
  //         tracks:this.props.tracks
  //     })
  //
  // }
  // componentDidUpdate =(prevProps) =>{
  //     if(prevProps.tracks!==this.props.tracks) {
  //         this.setState({
  //             tracks:this.props.tracks
  //         })
  //
  //     }
  // }

  render() {
    const { list } = this.props.songs;

    console.log("tracks", list);
    return (
      <Col className="col-sm-12 col-md-12 col-lg-7 pl-3 tracks">
        <ul className="list">
          {list.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </ul>
      </Col>
    );
  }
}

export default connect((state) => ({ ...state }))(TrackList);
