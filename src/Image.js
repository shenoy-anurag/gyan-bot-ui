import React from "react";

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.url = props.value.url
        this.title = props.value.title
        this.classes = props.value.classes
    }

    render() {
        return <img src={this.url} alt={this.title} className={this.classes} />
    }
}

export default Image;