import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

export const TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  const { title = 'Default Title', date = new Date() } =
    props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mb={4}
      width="100%"
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>

      <Box>
        <Chip
          label={format(date, 'PPP')}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
