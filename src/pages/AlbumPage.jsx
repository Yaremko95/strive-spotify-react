import React, {Component} from 'react';

class AlbumPage extends Component {
    render() {
        return (
            <div>
                    <h1 style={{color:"black"}}>{this.props.match.params.albumId}</h1>
            </div>
        );
    }
}

export default AlbumPage;