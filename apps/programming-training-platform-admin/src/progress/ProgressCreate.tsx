import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ProgressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="userId" source="userId" />
        <NumberInput step={1} label="courseId" source="courseId" />
        <NumberInput label="completedPercentage" source="completedPercentage" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
      </SimpleForm>
    </Create>
  );
};
