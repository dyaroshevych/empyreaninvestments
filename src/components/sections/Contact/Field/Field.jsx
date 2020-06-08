import React from "react";

import "./Field.scss";

const Field = ({ name, type, label, required, error, value, change }) => (
  <div className="Field">
    <label className="Field_label" htmlFor={name}>
      {label}
      {required && <span className="Field_required">*</span>}
    </label>
    {(type === "textarea" && (
      <textarea className="Field_textarea" id={name} rows="3" />
    )) || (
      <input
        className="Field_input"
        id={name}
        type="text"
        value={value}
        onChange={(e) => change(name, e.target.value)}
      />
    )}
    {error && <span className="Field_error">{error}</span>}
  </div>
);

export default Field;
