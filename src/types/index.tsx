export interface ITodo {
  id: string | number;
  isDone: boolean;
  value: string;
};

export type FilterStatus = 'all' | 'completed' | 'active';

export interface IFilter {
  currentStatus: FilterStatus;
}

export type newTodoValue = { id: string | number, newValue: string };