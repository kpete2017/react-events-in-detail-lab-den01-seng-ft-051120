import React from "react"
// Code CoordinatesButton Component Here
export default class CoordinatesButton extends React.Component {

    xArray = []
    yArray = []
    coordsArray = []

    handleClick = (event) => {
        this.coordsArray.push(event.clientX, event.clientY)
        this.props.onReceiveCoordinates(this.coordsArray)
    } 

    render() {
        return(
            <button onClick={this.handleClick}>Button</button>
        )
    }
} 