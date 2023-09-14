/**
 * Input with label, error, and any input args
 * @param {string} label
 * @param {string | undefined} error
 * @param {HTMLInputElement} args
 * @returns Input Component
 */
export const SelectMunicipios = ({ label, error, municipios, ...args }) => {
  return (
    <>
      <label className='flex-between mt-3'>
        {label}
        {error && <span className='text-red font-medium'>{error}</span>}
      </label>
      <select className={error ? 'border-red form-select' : 'form-select'} {...args}>
        <option value=''>Selecciona una opción</option>
        {
        municipios.length > 0 &&
            municipios.map((municipio, index) => (
              <option key={index} value={municipio}>
                {municipio}
              </option>
            ))
        }
      </select>
    </>
  )
}
