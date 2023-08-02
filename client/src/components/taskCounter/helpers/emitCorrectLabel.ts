import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../form/enums/Status';

export const emitCorrectLabel = (
  statusType: TaskCounterStatusType,
): string => {
  switch (statusType) {
    case Status.todo:
      return `Todo's`;
    case Status.inProgress:
      return `In Progress`;
    case Status.completed:
      return `Completed`;
  }
};
