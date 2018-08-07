import React from 'react';
import ReactQuill from 'react-quill';

const editorStyle = {
  height: '220px'
}

class Quill extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             text: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }


//     handleChange(value) {
//         this.setState({
//             text: value
//         })
//     }

//     render() {
//         console.log("텍스트 내용");
//         console.log(this.state.text);
//         return (
//             <ReactQuill value = {this.state.text} onChange = {this.handleChange} />
//         )
//     }
// }

  constructor (props) {
    super(props)
    this.state = { editorHtml: '', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }
  
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }
  
  render () {
    return (
      <div>
        <ReactQuill style={editorStyle}
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Quill.modules}
          formats={Quill.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
         />
        {/* <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => 
              this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div> */}
       </div>
     )
  }
}

Quill.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Quill.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

// Quill.propTypes = {
//     placeholder: PropTypes.string,
// }

export default Quill;