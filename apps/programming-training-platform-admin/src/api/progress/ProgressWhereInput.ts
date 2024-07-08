import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProgressWhereInput = {
  id?: StringFilter;
  userId?: IntNullableFilter;
  courseId?: IntNullableFilter;
  completedPercentage?: FloatNullableFilter;
  lastUpdated?: DateTimeNullableFilter;
};
