import React, {Component} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import Album from "./Album";
import uniqBy from 'lodash/uniqBy'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            list:[],

        }
    }
    componentDidMount() {
        if(this.props.list) {
            this.setState({
                title:this.props.title,
                list:this.props.list,


            })
        }
        if(this.props.fetchAlbums) {
            this.props.fetchAlbums()

        }


    }
  componentDidUpdate=(prevProps)=> {
    if(prevProps.list!== this.props.list) {
        let list = this.props.list.filter(item => item.artist.name='Queen')
       let albums= list.map(album=>album.album)
        let filteredAlbums =uniqBy(albums, "title")
        console.log( uniqBy(albums, "title"))

        this.setState({

            list:filteredAlbums
        })
    }
}
    render() {
        console.log(this.state.isLoading)
        return (
            <Container style={{maxWidth:"1400px"}}>
                <div className=" d-flex flex-wrap row">
                    <h3 className=" mt-5 mb-3 w-50 ml-3">{this.state.title}</h3>
                </div>
                    <Row className="  mb-5 row-cols-1 row-cols-md-4 row-cols-lg-6">
                        {this.state.list.map(album=>  {
                                // if(this.props.isLoading ) {
                                //    return   <Spinner animation="grow" variant="secondary" />
                                // }
                            return(
                                <Col className="d-flex flex-column align-items-center mb-3">
                                    <Album album={album}/>
                                </Col>)
                        })}



                    </Row>
            </Container>

        );
    }
}

export default Gallery;