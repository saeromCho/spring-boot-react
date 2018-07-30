import React from 'react';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';



class ReactDraftEditor extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         editorState: EditorState.createEmpty(),
    //     };
    //     this.onEditorStateChange = this.onEditorStateChange.bind(this);
    //     this.textValueChange = this.textValueChange.bind(this);
    // }
    
    // onEditorStateChange() {
    //     this.setState({
    //         editorState: this.state.editorState,
    //     });
    // };

    // textValueChange(event) {
    //     this.setState({
    //         textValue: event.target.value
    //     });
    // }
    
    // render() {
    //     // const { editorState } = this.state.editorState;
    //     return (
    //         <div>
    //         <Editor
    //             editorState={this.state.editorState}
    //             wrapperClassName="demo-wrapper"
    //             editorClassName="demo-editor"
    //             onEditorStateChange={this.onEditorStateChange}
    //         />
    //         <textarea
    //             onChange = {this.textValueChange}
    //             value={this.state.textValue}
    //         />
    //         </div>
    //     );
    // }
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    
    onEditorStateChange(editorState){
    this.setState({
        editorState,
    });
    };

    render() {
        const { editorState } = this.state;
        console.log({editorState});
        return (
            <div>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
            />
            위치<br />
            <textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
            </div>
        );
    }
}

export default ReactDraftEditor;