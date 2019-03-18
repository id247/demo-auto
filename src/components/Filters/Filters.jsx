import React from 'react';
import PropTypes from 'prop-types';
import { fetchStatesPropType, formInputsPropType } from 'constants/propTypes';
import Button from 'controls/Button';
import Form from 'components/Form';
import SidebarItem from 'components/SidebarItem';
import SidebarButton from 'components/SidebarButton';
import Idle from 'components/Idle';

function Filters({ filterInputs, queryParams, fetchStates, onSubmit }) {
  return (
    <SidebarItem>
      <Form
        fetchStates={fetchStates}
        inputs={filterInputs}
        initialValues={queryParams}
        onSubmit={onSubmit}
        buttons={
          <SidebarButton>
            {fetchStates.isIdle ? (
              <Idle
                style={{
                  display: 'inline-block',
                  width: '128px',
                  height: '30px'
                }}
              />
            ) : (
              <Button type="submit">Filter</Button>
            )}
          </SidebarButton>
        }
      />
    </SidebarItem>
  );
}

Filters.propTypes = {
  filterInputs: formInputsPropType,
  fetchStates: fetchStatesPropType.isRequired,
  queryParams: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Filters;
