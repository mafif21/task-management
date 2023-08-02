import React, { FC, ReactElement } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';

import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack spacing={2} sx={{ width: '100%' }}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />

        <Stack
          sx={{ width: '100%' }}
          direction="row"
          spacing={2}
        >
          <TaskSelectField
            name="status"
            label="Status"
            items={[
              {
                label: Status.todo.toUpperCase(),
                value: Status.todo,
              },
              {
                label: Status.inProgress.toUpperCase(),
                value: Status.inProgress,
              },
              {
                label: Status.completed.toUpperCase(),
                value: Status.completed,
              },
            ]}
          />
          <TaskSelectField
            name="priority"
            label="Priority"
            items={[
              {
                label: Priority.low.toUpperCase(),
                value: Priority.low,
              },
              {
                label: Priority.normal.toUpperCase(),
                value: Priority.normal,
              },
              {
                label: Priority.high.toUpperCase(),
                value: Priority.high,
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
