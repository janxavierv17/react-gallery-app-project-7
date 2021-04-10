import React from "react"
import PhotoItem from "./PhotoItem"
export default class PhotoContainer extends React.Component {
    render() {

        console.log("From PhotoContainer:", this.props.data)
        return (
            <div className="photo-container">
                <h2> Gifs</h2>
                <ul>
                    {
                        this.props.data.map(photoProps => (<PhotoItem id={photoProps.id} serverID={photoProps.server} secretID={photoProps.secret} />))
                    }
                </ul>
            </div>
        )
    }

}