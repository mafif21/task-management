import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskTitleField: FC<ITextField> = (
  props,
): ReactElement => {
  // desctructuring props
  const {
    disabled = false,
    onChange = (e) => console.log(e.target.value),
  } = props;
  return (
    <TextField
      variant="outlined"
      id="title"
      label="Task Title"
      placeholder="Task Title"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
