import { Input } from '../form/Input'
import { REDUCER_ACTIONS, useForm, useFormDispatch } from '../../state/FormContext'
import { Select } from '../form/Select'
import { Col, Row } from 'react-bootstrap'

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
        Por favor proporciona tu información.
      </p>
      <Row>
        <Col>
          <Input
            label='Correo electrónico'
            error={formState.errors.email}
            type='email'
            name='email'
            placeholder='example@lorem.com'
            onChange={(e) => handleTextChange(e)}
            value={formState.email}
            autoComplete='off'
          />
        </Col>
        <Col>
          <Select
            label='Tipo de registro'
            error={formState.errors.typeRegister}
            type='text'
            name='typeRegister'
            onChange={(e) => handleTextChange(e)}
            value={formState.typeRegister}
            options="
          <option value=''>Selecciona una opción</option>
          <option value='visitante'>VISITANTE</option>
          <option value='medio'>MEDIO</option>
          "
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            label='Nombre'
            error={formState.errors.name}
            type='text'
            name='name'
            placeholder='e.g Juan Alberto'
            onChange={(e) => handleTextChange(e)}
            value={formState.name}
            autoComplete='off'
          />
        </Col>
        <Col>
          <Input
            label='Apellido Paterno'
            error={formState.errors.apellidoPaterno}
            type='text'
            name='apellidoPaterno'
            placeholder='e.g. Pérez'
            onChange={(e) => handleTextChange(e)}
            value={formState.apellidoPaterno}
            autoComplete='off'
          />
        </Col>
        <Col>
          <Input
            label='Apellido Materno'
            error={formState.errors.apellidoMaterno}
            type='text'
            name='apellidoMaterno'
            placeholder='e.g. Pérez'
            onChange={(e) => handleTextChange(e)}
            value={formState.apellidoMaterno}
            autoComplete='off'
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Select
            label='Genero'
            error={formState.errors.sexo}
            type='text'
            name='sexo'
            onChange={(e) => handleTextChange(e)}
            value={formState.sexo}
            options="
            <option value=''>Selecciona una opción</option>
            <option value='masculino'>masculino</option>
            <option value='femenimo'>femenimo</option>
            "
          />
        </Col>
        <Col>
          <Select
            label='Rango de edad'
            error={formState.errors.rangoEdad}
            type='text'
            name='rangoEdad'
            onChange={(e) => handleTextChange(e)}
            value={formState.rangoEdad}
            options="
            <option value=''>Selecciona una opción</option>
            <option value='menor a 25 años'>menor a 25 años</option>
            <option value='entre 25 y 40 años'>entre 25 y 40 años</option>
            <option value='entre 40 y 60 años'>entre 40 y 60 años</option>
            <option value='más de 60 años'>más de 60 años</option>
            "
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            label='Teléfono celular'
            error={formState.errors.phone}
            type='number'
            name='phone'
            placeholder='e.g. 4771234567'
            onChange={(e) => handleTextChange(e)}
            value={formState.phone}
            autoComplete='off'
          />
        </Col>
        <Col>
          <Input
            label='Linkedin'
            error={formState.errors.linkedin}
            type='text'
            name='linkedin'
            placeholder='e.g. https://www.linkedin.com/in/username'
            onChange={(e) => handleTextChange(e)}
            value={formState.linkedin}
            autoComplete='off'
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            label='Facebook'
            error={formState.errors.facebook}
            type='text'
            name='facebook'
            placeholder='e.g. https://www.facebook.com/username'
            onChange={(e) => handleTextChange(e)}
            value={formState.facebook}
            autoComplete='off'
          />
        </Col>
        <Col>
          <Input
            label='Instagram'
            error={formState.errors.instagram}
            type='text'
            name='instagram'
            placeholder='e.g. https://www.instagram.com/username/'
            onChange={(e) => handleTextChange(e)}
            value={formState.instagram}
            autoComplete='off'
          />
        </Col>
        <Col>
          <Input
            label='Tiktok'
            error={formState.errors.tiktok}
            type='text'
            name='tiktok'
            placeholder='e.g. https://www.tiktok.com/@username/'
            onChange={(e) => handleTextChange(e)}
            value={formState.tiktok}
            autoComplete='off'
          />
        </Col>
      </Row>
    </div>
  )
}
