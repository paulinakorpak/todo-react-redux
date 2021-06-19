import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { BsArchiveFill } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import Element from './styles';
import { removeItem, toggleCompleted } from '../../todoSlice';

function Item({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(item));
  };

  const className = item.completed ? 'checked text-decoration-line-through' : '';

  return (
    <Element
      className="todo"
      data-test="item"
    >
      <Form.Group controlId="formBasicCheckbox" className="d-flex align-items-center">
        <Form.Check
          onClick={handleToggleCompleted}
          type="checkbox"
          label={item.title}
          className={`checkbox flex-grow-1 text-secondary flex-grow-1 ${className}`}
          data-test="completed-checkbox"
        />
        <BsArchiveFill
          onClick={handleRemove}
          className="icon text-primary"
          data-test="remove-item"
        />
      </Form.Group>
    </Element>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
