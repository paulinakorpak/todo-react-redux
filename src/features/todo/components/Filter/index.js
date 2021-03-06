import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../todoSlice';

function Filter() {
  const dispatch = useDispatch();

  const handleSetFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <ButtonGroup className="mt-3">
        <Button
          onClick={handleSetFilter}
          variant="link text-decoration-none"
          data-filter="All"
          data-test="filter-all"
        >
          All
        </Button>
        <Button
          onClick={handleSetFilter}
          variant="link text-decoration-none"
          data-filter="Active"
          data-test="filter-active"
        >
          Active
        </Button>
        <Button
          onClick={handleSetFilter}
          variant="link text-decoration-none"
          data-filter="Done"
          data-test="filter-done"
        >
          Done
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Filter;
