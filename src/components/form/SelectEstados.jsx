/**
 * Input with label, error, and any input args
 * @param {string} label
 * @param {string | undefined} error
 * @param {HTMLInputElement} args
 * @returns Input Component
 */
export const SelectEstados = ({ label, error, estados, ...args }) => {
  return (
    <>
      <label className='flex-between mt-3'>
        {label}
        {error && <span className='text-red font-medium'>{error}</span>}
      </label>
      <select className={error ? 'border-red form-select' : 'form-select'} {...args}>
        <option value=''>Selecciona una opción</option>
        {Object.keys(estados).map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>
    </>
  )
}
