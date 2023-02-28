/**
 * Input with label, error, and any input args
 * @param {string} label
 * @param {string | undefined} error
 * @param {HTMLInputElement} args
 * @returns Input Component
 */
export const Input = ({ label, error, ...args }) => {
  return (
    <>
      <label className="flex-between">
        {label}
        {error && <span className="text-red font-medium">{error}</span>}
      </label>
      <input className={error ? "border-red" : ""} {...args} />
    </>
  );
};