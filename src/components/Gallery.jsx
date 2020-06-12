import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import Album from "./Album";


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            list:[]
        }
    }
    componentDidMount() {
        this.setState({
            title:this.props.title,
            list:this.props.list
        })
    }

    render() {
        return (
            <Container style={{maxWidth:"1400px"}}>
                <div className=" d-flex flex-wrap row">
                    <h3 className=" mt-5 mb-3 w-50 ml-3">{this.state.title}</h3>
                </div>
                    <Row className="  mb-5 row-cols-1 row-cols-md-4 row-cols-lg-6">
                        {this.state.list.map(album=> <Album album={album}/>)}
                    </Row>
            </Container>

        );
    }
}

export default Gallery;