export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  status?: "Option1" | null;
  description: string | null;
  courseId: number | null;
  dueDate: Date | null;
};
