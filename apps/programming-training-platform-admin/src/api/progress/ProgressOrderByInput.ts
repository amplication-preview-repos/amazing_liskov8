import { SortOrder } from "../../util/SortOrder";

export type ProgressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  courseId?: SortOrder;
  completedPercentage?: SortOrder;
  lastUpdated?: SortOrder;
};
