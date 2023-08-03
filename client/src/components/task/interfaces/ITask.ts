import { ITaskHeader } from './ITaskHeader';
import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ITaskFooter';
import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';

export interface ITask
  extends ITaskHeader,
    ITaskDescription,
    ITaskFooter {
  id?: string;
  status?: TaskCounterStatusType;
  priority?: string;
}
