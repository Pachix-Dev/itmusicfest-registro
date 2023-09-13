/**
 * Input with label, error, and any input args
 * @param {string} label
 * @param {string | undefined} error
 * @param {HTMLInputElement} args
 * @returns Input Component
 */
export const Select = ({ label, error, ...args }) => {
  return (
    <>
      <label className='flex-between'>
        {label}
        {error && <span className='text-red font-medium'>{error}</span>}
      </label>
      <select className={error ? 'border-red' : ''} {...args}>
        <option value=''>Select an option</option>
        <option value='menor 25 años'>menor 25 años</option>
        <option value='entre 25 y 40 años'>entre 25 y 40 años</option>
        <option value='entre 40 y 60 años'>entre 40 y 60 años</option>
        <option value='más de 60 años'>más de 60 años</option>
      </select>
    </>
  )
}
