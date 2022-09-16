import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const Input = (props) => {
  const { name, type, className, rows, ...rest } = props;
  const [field, mata] = useField(name);
  let config;
  if (type === "date") {
    config = {
      ...field,
      ...rest,
      type,
      fullWidth: true,
      variant: "outlined",
      InputLabelProps: {
        shrink: true,
      },
    };
  } else if (type === "description") {
    config = {
      ...field,
      ...rest,
      fullWidth: true,
      variant: "outlined",
      multiline: true,
      rows: rows,
    };
  } else {
    config = {
      ...field,
      ...rest,
      type,
      fullWidth: true,
      variant: "outlined",
    };
  }

  if (mata.touched && mata.error) {
    config.error = true;
    config.helperText = mata.error;
  }

  return (
    <>
      <TextField {...config} className={className} />
    </>
  );
};

export default Input;
