import React, { Component } from 'react';

//components
import FormComponent from './FormComponent';
import ListOfSentComponent from './ListOfSent-Component';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    };

    this.addTicketList = this.addTicketList.bind(this);
  }

  updateList(newList) {
    this.setState({
      list: newList
    });
  }

  addTicketList(item) {
    var list = this.state.list;

    list[item] = item;

    this.updateList(list);
  }

  render() {
    var items = this.state.list;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">

            <ListOfSentComponent items={items} />
            <FormComponent addTicketList={this.addTicketList}/>

          </div>
        </div>
      </div>
    );
  }
}

export default FormContainer;
