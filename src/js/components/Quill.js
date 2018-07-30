import React from 'react';
import ReactQuill from 'react-quill';

class Quill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(value) {
        this.setState({
            text: value
        })
    }

    render() {
        console.log("텍스트 내용");
        console.log(this.state.text);
        return (
            <ReactQuill value = {this.state.text} onChange = {this.handleChange} />
        )
    }
}

export default Quill;