export type ProgressUpdateInput = {
  userId?: number | null;
  courseId?: number | null;
  completedPercentage?: number | null;
  lastUpdated?: Date | null;
};
