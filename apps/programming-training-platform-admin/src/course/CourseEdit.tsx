import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="author" source="author" />
      </SimpleForm>
    </Edit>
  );
};
