import { Status } from '../../form/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
export const emitCorrectBorderColor = (
  statusType: TaskCounterStatusType,
): string => {
  switch (statusType) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
  }
};
