import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import PropTypes from 'prop-types';
// import { Status } from '../form/enums/Status';
import { Priority } from '../form/enums/Priority';
import { RenderPriorityColor } from './helpers/RenderPriorityColor';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    id = 1,
    // status = Status.inProgress,
    priority = Priority.normal,
    title = 'This is default title',
    date = new Date(),
    description = 'This is default description for content',
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      key={id}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={4}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: RenderPriorityColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onStatusChange={onStatusChange}
        onClick={onClick}
      />
    </Box>
  );
};

Task.propTypes = {
  // status: PropTypes.oneOf([
  //   Status.todo,
  //   Status.inProgress,
  //   Status.completed,
  // ]),
  priority: PropTypes.oneOf([
    Priority.low,
    Priority.normal,
    Priority.high,
  ]),
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
