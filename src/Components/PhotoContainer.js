import React from "react"
import PhotoItem from "./PhotoItem"
export default class PhotoContainer extends React.Component {
    render() {
        return (
            <div className="photo-container">
                <h2> Gifs</h2>
                <ul>
                    {/* Iterate over an array of objects to take the properties from the API and send it to a component to display to the page. */}
                    {
                        this.props.data.map(photoProps => (<PhotoItem key={photoProps.id} id={photoProps.id} serverID={photoProps.server} secretID={photoProps.secret} />))
                    }
                </ul>
            </div>
        )
    }

}