import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { BsArchiveFill } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import Element from './styles';
import { removeItem } from '../../todoSlice';

function Item({ item }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItem(item));
  };

  return (
    <Element className="todo">
      <Form.Group controlId="formBasicCheckbox" className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          label={item.title}
          className="checkbox flex-grow-1 text-secondary flex-grow-1"
        />
        <BsArchiveFill
          onClick={handleClick}
          className="icon text-primary"
        />
      </Form.Group>
    </Element>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
