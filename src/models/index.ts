export interface TodoItem {
  title: string;
  description?: string;
  isDone: boolean;
}

export interface NavItem {
  id: number;
  to: string;
  name: string;
}