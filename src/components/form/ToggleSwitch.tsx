import React from 'react';

/**
 * This component is based of the toggle switch from w3schools
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
 *
 * Since the underlying input element is a checkbox, the controlled component
 * needs to know when it is checked and the onChange handler needs to examine
 * e.target.checked on the onChange handler.
 *
 * Since we rely on dispatch actions, we bubble up the event instead of just the
 * checked value
 *
 * @param {*} param0
 * @returns
 */
export function ToggleSwitch({ name, checked, onChange }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e)}
        // onChange={e => onChange(e.target.checked)}
      />
      <span className="slider round"></span>
    </label>
  );
}