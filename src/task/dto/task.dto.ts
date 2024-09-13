export interface AddTaskDto {
  description: string;
  dateCreated: Date;
  isCompleted: boolean;
}

export interface EditTaskDto {
  description: string;
  dateCreated: Date;
  isCompleted: boolean;
}
