import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import AlbumJumbotron from "../components/AlbumJumbotron";
import Gallery from "../components/Gallery";

class AlbumsPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            albums:[]
        }
    }
    componentDidMount() {
        this.fetchAlbums()
    }
     fetchAlbums = async () =>{
        let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=queen`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc"
            }
        })
         let albums = await response.json()
         this.setState({
             albums:albums.data
         })
         console.log(this.state.albums)
    }

    render() {
        return (
            <Col className=" col-md-9 col-lg-10 d-md-block p-0 artist-content" style={{backgroundColor:"#181818"}}>
                <AlbumJumbotron />
                <Gallery title={"Albums"} fetchAlbums={()=>this.fetchAlbums()} list={this.state.albums}/>
                {/*<div className="container" style="max-width: 90%;">*/}
                {/*    <h2 className="mb-2  " style="color:whitesmoke;">Album</h2>*/}
                {/*    <div*/}
                {/*        className="albums-container row row-cols-1 row-cols-md-2 row-cols-lg-6 justify-content-center align-items-start ">*/}

                {/*    </div>*/}
                {/*</div>*/}

            </Col>
        );
    }
}

export default AlbumsPage;