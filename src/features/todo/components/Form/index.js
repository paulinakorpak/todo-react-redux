import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../todoSlice';

function Form() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const newItem = {
        id: Date.now(),
        title: e.target.value,
        completed: false,
      };

      dispatch(addItem(newItem));

      e.target.value = '';
    }
  };

  return (
    <div className="w-100">
      <input
        onKeyDown={handleChange}
        type="text"
        placeholder="add new todo"
        className="form-control form-control-color-secondary p-4"
        data-test="add-item-input"
      />
    </div>
  );
}

export default Form;
