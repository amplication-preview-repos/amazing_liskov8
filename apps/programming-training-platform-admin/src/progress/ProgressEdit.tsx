import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ProgressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="userId" source="userId" />
        <NumberInput step={1} label="courseId" source="courseId" />
        <NumberInput label="completedPercentage" source="completedPercentage" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
      </SimpleForm>
    </Edit>
  );
};
