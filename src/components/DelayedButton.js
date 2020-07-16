// Code DelayedButton Component Here
import React from "react"
// Code CoordinatesButton Component Here
export default class DelayedButton extends React.Component {

    clickHandler = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }

    render() {
        return(
            <button onClick={this.clickHandler}>Button</button>
        )
    }
    
} 