import { Input } from '../form/Input'
import { REDUCER_ACTIONS, useForm, useFormDispatch } from '../../state/FormContext'
import { Select } from '../form/Select'

export function Step1Form () {
  const formState = useForm()
  const dispatch = useFormDispatch()

  const handleTextChange = (e) => {
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: e.target.name,
      payload: e.target.value
    })
  }

  return (
    <div className='form-container'>
      <h2>Datos del participante</h2>
      <p className='mb-1'>
        Por favor proporciona tu nombre, correo electrónico y número de teléfono.
      </p>
      <Input
        label='Name'
        error={formState.errors.name}
        type='text'
        name='name'
        placeholder='e.g. Juan Pérez'
        onChange={(e) => handleTextChange(e)}
        value={formState.name}
        autoComplete='off'
      />
      <Input
        label='Email Address'
        error={formState.errors.email}
        type='email'
        name='email'
        placeholder='e.g. example@lorem.com'
        onChange={(e) => handleTextChange(e)}
        value={formState.email}
        autoComplete='off'
      />
      <Input
        label='Phone Number'
        error={formState.errors.phone}
        type='number'
        name='phone'
        placeholder='e.g. 4771234567'
        onChange={(e) => handleTextChange(e)}
        value={formState.phone}
        autoComplete='off'
      />
      <Select
        label='Rango de edad'
        error={formState.errors.ageRange}
        type='text'
        name='ageRange'
        onChange={(e) => handleTextChange(e)}
        value={formState.ageRange}
      />
    </div>
  )
}
