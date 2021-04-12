import React from "react"
export default function PhotoItem(props) {
    return (
        <li >
            <img src={`https://live.staticflickr.com/${props.serverID}/${props.id}_${props.secretID}.jpg`} alt="" />
        </li>
    )
}