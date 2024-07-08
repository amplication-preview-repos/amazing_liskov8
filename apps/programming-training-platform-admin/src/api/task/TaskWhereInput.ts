import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  status?: "Option1";
  description?: StringNullableFilter;
  courseId?: IntNullableFilter;
  dueDate?: DateTimeNullableFilter;
};
