export interface ITodo {
  id: string | number;
  isDone: boolean;
  isDisplay: boolean;
  isEditing: boolean;
  value: string;
};

export type FilterStatus = 'all' | 'completed' | 'active';

export interface IFilter {
  currentStatus: FilterStatus;
}