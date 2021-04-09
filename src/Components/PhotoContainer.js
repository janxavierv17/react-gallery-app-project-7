import React from "react"
import PhotoItem from "./PhotoItem"
export default function PhotoContainer(props) {
    return (
        <div class="photo-container">
            <h2>{props.title} Gifs</h2>
            <PhotoItem />
        </div>
    )
}