import React, { FC, ReactElement } from 'react';
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';

export const TaskSelectField: FC = (): ReactElement => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="status">Status</InputLabel>
      <Select
        labelId="status"
        id="status-select"
        value=""
        label="status"
        name="status"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Four</MenuItem>
      </Select>
    </FormControl>
  );
};
