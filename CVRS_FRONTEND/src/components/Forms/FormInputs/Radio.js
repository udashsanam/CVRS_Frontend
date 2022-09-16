import { Typography } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import React from "react";
import TextError from "../TextError";

const Radio = (props) => {
  const { name, label, options, className, ...rest } = props;
  return (
    <div className={`mb-3 ${className}`}>
      <Typography className="p-0" htmlFor={name}>
        {label} 
      </Typography>
      <div className="d-flex">
        <Field name={name} {...rest}>
          {(props) => {
            return options.map((option) => {
              return (
                <div className="d-flex align-items-center" key={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    {...props.field}
                    value={option.value}
                    checked={props.field.value === option.value}
                    style={{ marginRight: "20px" }}
                  />
                  <Typography style={{ marginRight: "20px" }}  htmlFor={option.value}>{option.value}</Typography>
                </div>
              );
            });
          }}
        </Field>
      </div>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Radio;
