import React, { Component } from 'react';

//components
import ListOfSentListPanel from './ListOfSent-ListPanel';

class ListOfSentComponent extends Component {
  getListOfIds(items) {
    return Object.keys(items);
  }

  createListElements(items) {
    var item;

    return (
      this
      .getListOfIds(items)
      .map(function createListItemElement(itemId) {
        item = items[itemId];
        return (<ListOfSentListPanel item={item} key={item.date} />);//key={item.id}
      })
      .reverse()
    );
  }

  render() {
    var items = this.props.items;
    var listItemElements = this.createListElements(items);

    return (
      <div className={listItemElements.length > 0 ? "":"alert alert-info"}>
          {listItemElements.length > 0 ? listItemElements :
          "You have not raised any ticket yet. Fill this form to submit the ticket"}
      </div>
    );
  }
};

export default ListOfSentComponent;
