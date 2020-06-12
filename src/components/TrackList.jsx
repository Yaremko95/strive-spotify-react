import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            album:{}
        }
    }
    componentDidMount= ()=> {
        //this.props.fetchAlbum()
        this.setState({
            album:this.props.album
        })
        console.log(this.state.album)

    }
    componentDidUpdate =(prevProps) =>{
        if(prevProps.album!==this.props.album) {
            this.setState({
                album:this.props.album
            })

        }
    }

    render() {

         const {tracks} = this.state.album
        console.log("tracks", this.state.album)
        return (
            <Col className="col-sm-12 col-md-12 col-lg-7 pl-3">
                <ul className="list">
                    {tracks.data.map(track=> (
                        <li className="d-flex  mb-3 justify-content-between" >
                            <div className="d-flex flex-column">
                                <span className='song-title'><i className="fa fa-music mr-2"></i>{track.title}</span>
                                <span className="ml-4 pt-0" style={{color: "#93A0B0"}}>{track.artist.name}</span>
                            </div>
                            <span className="mr-3">{track.duration / 100}</span>
                        </li>
                    ))}

                </ul>


            </Col>
        );
    }
}

export default TrackList;