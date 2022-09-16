import { useFormikContext } from "formik";
import React from "react";
import DropDown from "./FormInputs/DropDown";
import Input from "./FormInputs/Input";
import Radio from "./FormInputs/Radio";
import Select from "./FormInputs/Select";


function FormControls(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    default:
      return null;
  }
}

export default FormControls;
