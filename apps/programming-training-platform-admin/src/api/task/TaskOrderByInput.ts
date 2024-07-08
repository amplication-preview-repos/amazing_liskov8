import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  status?: SortOrder;
  description?: SortOrder;
  courseId?: SortOrder;
  dueDate?: SortOrder;
};
