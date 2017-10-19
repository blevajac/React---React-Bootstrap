import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ListOfSentListPanel extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    const { item } = this.props;

    if(item) {
      this.setState({modalIsOpen: true});
    }
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { item } = this.props;

    return(
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
      <div className="panel panel-default">
      		<div className="panel-body">
      			{item.issueType}<br/>
      			{item.email}<br/>
      			{item.comment}
      		</div>

      		<div className="panel-footer">
      			{item.date.toString()}
      		</div>
      </div>

      <button onClick={this.closeModal} className="btn btn-default">Close</button>
      </Modal>
    );
  }
};

export default ListOfSentListPanel;
