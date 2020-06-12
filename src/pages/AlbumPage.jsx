import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import AlbumCover from "../components/AlbumCover";
import uniqBy from "lodash/uniqBy";
import TrackList from "../components/TrackList";

class AlbumPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            album:{},
            tracks:[]
        }
    }

    componentDidMount() {
        this.fetchAlbum()
    }
    fetchAlbum =async()=> {

        let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${this.props.match.params.albumId}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc"
            }
        })
        if(response.ok) {
            let album = await response.json()
            this.setState({
                album:album,
                tracks:album.tracks.data
            })
            console.log(this.state.tracks)

        }
    }


    render() {
        return (
            <Col className="col-sm-12 col-md-9 col-lg-10 music-list" style={{backgroundColor:"#181818"}}>


                <Row className="row mb-5 mt-5">
                   <AlbumCover album={this.state.album}  />
                   <TrackList  tracks={this.state.tracks} />
                </Row>
                <div className="filter ml-5">

                </div>
                <div className="row album-list row-cols-1 row-cols-md-2 row-cols-lg-4  align-items-start">

                </div>

            </Col>
        );
    }
}

export default AlbumPage;