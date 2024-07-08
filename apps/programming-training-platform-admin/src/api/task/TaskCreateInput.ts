export type TaskCreateInput = {
  title?: string | null;
  status?: "Option1" | null;
  description?: string | null;
  courseId?: number | null;
  dueDate?: Date | null;
};
