import { IDisabled } from './IDisabled';
import { SelectChangeEvent } from '@mui/material';

interface ISelectItems {
  label: string;
  value: string;
}

export interface ISelectField extends IDisabled {
  label?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectItems[];
}
