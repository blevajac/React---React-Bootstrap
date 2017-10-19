import React, { Component } from 'react';

//components
import TextAreaComponent from './TextAreaComponent';

var style = {color: "#ffaaaa"};

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleSubmitEvent(event) {
    event.preventDefault();

    //First refs.comment is needed to get data from the child component
    //this.refs.comment.refs.comment

    var values  = {
        date: new Date(),
        email: this.refs.email.value.trim(),
        issueType: this.refs.issueType.value.trim(),
        department: this.refs.department.value.trim(),
        comment:this.refs.comment.refs.comment.value.trim()
    };
    this.props.addTicketList(values);

  };

  render() {
    return (
      <form onSubmit={this.handleSubmitEvent}>
      		<div className="form-group">
      			<label htmlFor="email">Email <span style={style}>*</span></label>
      			<input type="text" id="email" className="form-control"
            placeholder="Enter email" required ref="email"/>
      		</div>
      		<div className="form-group">
      			<label htmlFor="issueType">Issue Type <span style={style}>*</span></label>
      			<select className="form-control" id="issueType" required ref="issueType">
      				<option value="test">-----Select----</option>
      				<option value="Access Related Issue">Access Related Issue</option>
      				<option value="Email Related Issues">Email Related Issues</option>
      				<option value="Hardware Request">Hardware Request</option>
      				<option value="Health & Safety">Health & Safety</option>
      				<option value="Network">Network</option>
      				<option value="Intranet">Intranet</option>
      				<option value="Other">Other</option>
      			</select>
      		</div>

      		<div className="form-group">
      			<label htmlFor="department">Assign Department <span style={style}>*</span></label>
      			<select className="form-control" id="department" required ref="department">
      				<option value="">-----Select----</option>
      				<option value="Admin">Admin</option>
      				<option value="HR">HR</option>
      				<option value="IT">IT</option>
      				<option value="Development">Development</option>
      			</select>
      		</div>

          <TextAreaComponent ref="comment"/>

      		<div className="btn-group">
      			<button type="submit" className="btn btn-primary">Submit</button>
      			<button type="reset" className="btn btn-link">cancel</button>
      		</div>
      </form>
    );
  }
}

export default FormComponent;
