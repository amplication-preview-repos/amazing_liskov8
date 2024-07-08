export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  duration: number | null;
  author: string | null;
};
