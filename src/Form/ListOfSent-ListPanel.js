import React from 'react';

const ListOfSentListPanel = (props) => (

  <div className="panel panel-default">
  		<div className="panel-body">
  			{props.item.issueType}<br/>
  			{props.item.email}<br/>
  			{props.item.comment}
  		</div>

  		<div className="panel-footer">
  			{props.item.date.toString()}
  		</div>
  </div>

);

export default ListOfSentListPanel;
