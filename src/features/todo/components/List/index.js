import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import Item from '../Item/index';
import { selectItems } from '../../todoSlice';

function List() {
  const items = useSelector(selectItems);

  return (
    <div className="w-100">
      <ListGroup data-test="items-list">
        {items.map((item) => <Item key={item.id} item={item} />)}
      </ListGroup>
    </div>
  );
}

export default List;
