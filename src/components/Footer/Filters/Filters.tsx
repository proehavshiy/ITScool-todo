import React, { FC } from 'react';
import { FilterStatus } from '../../../types';
import Button from '../../Button/Button';
import './Filters.css';

const BUTTON_FILTER_ALL = 'All';
const BUTTON_FILTER_ACTIVE = 'Active';
const BUTTON_FILTER_COMPLETED = 'Completed';
const BUTTON_FILTER_CLEARALL = 'Clear completed';

const FILTERSTATUS_ALL = 'all';
const FILTERSTATUS_ACTIVE = 'active';
const FILTERSTATUS_COMPLETED = 'completed';

interface IFilters {
  filterStatus: typeof FILTERSTATUS_ALL | typeof FILTERSTATUS_ACTIVE | typeof FILTERSTATUS_COMPLETED;
  updateFilter: (filterValue: FilterStatus) => void;
  deleteCompletedTodos: () => void;
};

const Filters: FC<IFilters> = ({ filterStatus, updateFilter, deleteCompletedTodos }) => {

  const handleDisplayAll = () => updateFilter(FILTERSTATUS_ALL);
  const handleDisplayActive = () => updateFilter(FILTERSTATUS_ACTIVE);
  const handleDisplayCompleted = () => updateFilter(FILTERSTATUS_COMPLETED);
  const handleDeleteAll = () => deleteCompletedTodos();

  return (
    <ul className={'filters'}>
      <li>
        <Button
          text={BUTTON_FILTER_ALL}
          isActive={filterStatus === FILTERSTATUS_ALL}
          handleClick={handleDisplayAll}

        />
      </li>
      <li>
        <Button
          text={BUTTON_FILTER_ACTIVE}
          isActive={filterStatus === FILTERSTATUS_ACTIVE}
          handleClick={handleDisplayActive}
        />
      </li>
      <li>
        <Button
          text={BUTTON_FILTER_COMPLETED}
          isActive={filterStatus === FILTERSTATUS_COMPLETED}
          handleClick={handleDisplayCompleted}
        />
      </li>
      <li>
        <Button
          text={BUTTON_FILTER_CLEARALL}
          handleClick={handleDeleteAll}
        />
      </li>
    </ul>
  )
}

export default Filters