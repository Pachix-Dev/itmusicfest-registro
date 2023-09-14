import { Col, Row } from 'react-bootstrap'
import { REDUCER_ACTIONS, useForm, useFormDispatch } from '../../state/FormContext'
import { Select } from '../form/Select'

// optional: move data into data json
export function Step3Form () {
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
      <h2>Encuesta</h2>
      <p className='mb-1'>Por favor contesta esta breve encuesta para finalizar.</p>
      <Row className='mt-3'>
        <Col>
          <Select
            label='¿Cómo se enteró del evento?'
            error={formState.errors.comoTeEnteraste}
            type='text'
            name='comoTeEnteraste'
            onChange={(e) => handleTextChange(e)}
            value={formState.comoTeEnteraste}
            options="
          <option value=''>Selecciona una opción</option>
          <option value='FACEBOOK'>FACEBOOK</option>
          <option value='TWITTER'>TWITTER</option>
          <option value='LINKEDIN'>LINKEDIN</option>
          <option value='INSTAGRAM'>INSTAGRAM</option>
          <option value='CORREO ELECTRÓNICO'>CORREO ELECTRÓNICO</option>
          <option value='INVITADO POR EXPOSITOR'>INVITADO POR EXPOSITOR</option>
          <option value='RADIO'>RADIO</option>
          <option value='TELEVISIÓN'>TELEVISIÓN</option>
          <option value='PRENSA'>PRENSA</option>
          <option value='ANUNCIO EN REVISTA'>ANUNCIO EN REVISTA</option>
          <option value='TELEMARKETING'>TELEMARKETING</option>

          "
          />
        </Col>
        <Col>
          <Select
            label='Producto de interés'
            error={formState.errors.productoInteres}
            type='text'
            name='productoInteres'
            onChange={(e) => handleTextChange(e)}
            value={formState.productoInteres}
            options="
            <option value=''>Selecciona una opción</option>
            <option value='AUTOMATIZACIÓN'>AUTOMATIZACIÓN</option>
            <option value='ROBOTIZACIÓN Y TRANSMISIÓN DE PODER'>ROBOTIZACIÓN Y TRANSMISIÓN DE PODER</option>
            <option value='MÁQUINAS Y HERRAMIENTAS'>MÁQUINAS Y HERRAMIENTAS</option>
            <option value='AEROESPACIAL'>AEROESPACIAL</option>
            <option value='LOGÍSTICA INTELIGENTE'>LOGÍSTICA INTELIGENTE</option>
            <option value='MANUFACTURA DIGITAL'>MANUFACTURA DIGITAL</option>
            <option value='GOBIERNO'>GOBIERNO</option>
            <option value='SOLUCIONES DE ENERGÍA'>SOLUCIONES DE ENERGÍA</option>
            <option value='INSTITUCIONES DE INVESTIGACIÓN'>INSTITUCIONES DE INVESTIGACIÓN</option>
            <option value='MANUFACTURA ADITIVA'>MANUFACTURA ADITIVA</option>
            <option value='E-MOBILITY'>E-MOBILITY</option>
            <option value='DATA & SOFTWARE'>DATA & SOFTWARE</option>
            "
          />
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Select
            label='Nivel de influencia'
            error={formState.errors.nivelInfluencia}
            type='text'
            name='nivelInfluencia'
            onChange={(e) => handleTextChange(e)}
            value={formState.nivelInfluencia}
            options="
            <option value=''>Selecciona una opción</option>
            <option value='EVALUO O RECOMIENDO PROVEEDOR'>EVALUO O RECOMIENDO PROVEEDOR</option>
            <option value='APRUEVO COMPRAS'>APRUEVO COMPRAS</option>
            <option value='NO TENGO DECISIÓN EN COMPRAS'>NO TENGO DECISIÓN EN COMPRAS</option>
            "
          />
        </Col>
        <Col>
          <Select
            label='¿Considerarías ser expositor en nuestra feria en próximos años?'
            error={formState.errors.serExpositor}
            type='text'
            name='serExpositor'
            onChange={(e) => handleTextChange(e)}
            value={formState.serExpositor}
            options="
            <option value=''>Selecciona una opción</option>
            <option value='SI'>SI</option>
            <option value='NO'>NO</option>
            "
          />
        </Col>
      </Row>
    </div>
  )
}
