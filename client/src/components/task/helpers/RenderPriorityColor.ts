import { Priority } from '../../form/enums/Priority';

export const RenderPriorityColor = (
  typePriority: string,
) => {
  switch (typePriority) {
    case Priority.low:
      return 'grey.900';
    case Priority.normal:
      return 'info.light';
    case Priority.high:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
