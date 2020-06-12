import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state ={

            tracks:[]
        }
    }
    componentWillMount= ()=> {
        //this.props.fetchAlbum()
        this.setState({
            tracks:this.props.tracks
        })

    }
    componentDidUpdate =(prevProps) =>{
        if(prevProps.tracks!==this.props.tracks) {
            this.setState({
                tracks:this.props.tracks
            })

        }
    }

    render() {

         const {tracks} = this.state
        console.log("tracks", tracks)
        return (
            <Col className="col-sm-12 col-md-12 col-lg-7 pl-3 tracks">
                <ul className="list">
                    {tracks.map(track=> (
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