import React, { Component } from 'react';

const max_Char='140';
const style = {color: "#ffaaaa"};

class TextAreaComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Controlled!!!',
      char_Left: max_Char
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let input = event.target.value;
    let substInput = input.substr(0, max_Char);
    let charLeft = max_Char -input.length;

    this.setState({value: substInput, char_Left: charLeft});
  }

  render() {
    return (
  		<div className="form-group">
  			<label htmlFor="comments">Comments <span style={style}>*</span>
        </label>(<span>{this.state.char_Left}</span> characters left)
  			<textarea className="form-control" value={this.state.value}
        maxLength={max_Char} onChange={this.handleChange} ref="comment" />
  		</div>
  	);
  }
}

export default TextAreaComponent;
