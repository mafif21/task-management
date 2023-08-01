import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  // desctructuring
  const {
    disabled = false,
    onChange = (e) => console.log(e.target.value),
  } = props;
  return (
    <TextField
      variant="outlined"
      id="description"
      label="Description"
      placeholder="Task Description"
      size="small"
      rows={4}
      multiline
      name="description"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
