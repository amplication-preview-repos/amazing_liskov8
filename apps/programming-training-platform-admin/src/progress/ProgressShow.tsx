import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProgressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <TextField label="courseId" source="courseId" />
        <TextField label="completedPercentage" source="completedPercentage" />
        <TextField label="lastUpdated" source="lastUpdated" />
      </SimpleShowLayout>
    </Show>
  );
};
