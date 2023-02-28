import React from 'react';
import checkmark from "../../assets/images/icon-checkmark.svg";

/**
 * This component is styled like the RadioButton 
 *  - includes a button feel with borders, hover effects, checkmark, 
 * description, and cost
 * 
 * checkbox html element chosen to allow user to select multiple or no items.
 *
 * @param {*} param0
 * @returns
 */
export function CheckmarkButton({
  checked,
  title,
  description,
  name,
  value,
  onChange,
  cost,
}) {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <div className="radio-button-container">
        <img className="checkmark-logo" src={checkmark} alt={`${title} logo`} />
        <div className="radio-text-container">
          <h4 className="radio-title">{title}</h4>
          <p className="radio-description">{description}</p>
        </div>
        <div className="checkmark-cost">{cost}</div>
      </div>
    </label>
  );
}
