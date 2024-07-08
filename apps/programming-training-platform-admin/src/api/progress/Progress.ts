export type Progress = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number | null;
  courseId: number | null;
  completedPercentage: number | null;
  lastUpdated: Date | null;
};
