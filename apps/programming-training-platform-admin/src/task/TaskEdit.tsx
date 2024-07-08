import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="courseId" source="courseId" />
        <DateTimeInput label="dueDate" source="dueDate" />
      </SimpleForm>
    </Edit>
  );
};
