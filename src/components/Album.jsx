import React, {Component} from 'react';
import {Col, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AiFillPlayCircle} from "react-icons/all";

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album:{},
            isHovering:false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }
    componentDidMount() {
        this.setState({
                album: this.props.album
            }
        )
    }
    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        const {album} =this.state
        return (
            <>
                <Link to={`/album/${album.id}`}>
                    <div className="albumsName"
                         onMouseEnter={this.handleMouseHover}
                         onMouseLeave={this.handleMouseHover} >
                        <Image  src={album.cover_medium} alt="..."
                               className="img-thumbnail p-0 border-0 rounded-0"/>
                        {this.state.isHovering && <AiFillPlayCircle style={{fontSize: "2.5rem", position: "absolute", top:"40%", left:"40%", color: "white", zIndex:"20",}}/>}
                    </div>
                </Link>
                <span className="mt-1 text-center bolder">{album.title}</span>
           </>
        )
    }
}

export default Album;