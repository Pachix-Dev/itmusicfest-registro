
import React from 'react';
import arcadeLogo from "../../assets/images/icon-arcade.svg";

/**
 * This styled radio button includes a button feel with borders, hover effects, logo, description
 * and conditional description based on whether isYearly is passed in.
 *
 * Would need to refactor if isYearly conditional changes.
 *
 * Radio html element chosen to allow user to only select one item.
 *
 * @param {*} param0
 * @returns
 */
export function RadioButton({
  checked,
  title,
  description,
  name,
  value,
  logoSrc = arcadeLogo,
  isYearly,
  onChange,
}) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <div className="radio-button-container">
        <img className="img-logo" src={logoSrc} alt={`${title} logo`} />
        <div className="radio-text-container">
          <h4 className="radio-title">{title}</h4>
          <p className="radio-description">{description}</p>
          {isYearly && <p className="radio-description-2">2 months free</p>}
        </div>
      </div>
    </label>
  );
}