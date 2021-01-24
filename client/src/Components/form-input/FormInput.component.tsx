import React from "react";
import "./formInput.styles.scss";
import { FormInputProps } from "./FormInput";

export default function FormInput({
  handleChange,
  label,
  ...otherProps
}: FormInputProps) {
  return (
    <div className="group">
      <input className="form-input" onChange={(e)=>handleChange(e.target.value)} {...otherProps} />
      {label ? (
        <label
          className={`${
            //@ts-ignore
            otherProps?.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
