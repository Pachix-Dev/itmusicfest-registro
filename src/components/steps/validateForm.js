const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const defaultError = 'This field is required'

const onValidateStep1 = (formState) => {
  const { email, typeRegister, name, apellidoPaterno, apellidoMaterno, sexo, rangoEdad, phone } = formState

  const errors = {
    name: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    sexo: '',
    rangoEdad: '',
    phone: '',
    email: '',
    typeRegister: ''
  }

  if (name.length === 0) {
    errors.name = defaultError
  }

  if (apellidoPaterno.length === 0) {
    errors.apellidoPaterno = defaultError
  }

  if (apellidoMaterno.length === 0) {
    errors.apellidoMaterno = defaultError
  }

  if (sexo.length === 0) {
    errors.sexo = defaultError
  }

  if (rangoEdad.length === 0) {
    errors.rangoEdad = defaultError
  }

  if (phone.length === 0) {
    errors.phone = defaultError
  }

  if (email.length === 0) {
    errors.email = defaultError
  } else if (!emailRegExp.test(email)) {
    errors.email = 'Must enter a valid email'
  }

  if (typeRegister.length === 0) {
    errors.typeRegister = defaultError
  }

  const hasError = !!errors.name || !!errors.apellidoPaterno || !!errors.apellidoMaterno || !!errors.sexo || !!errors.rangoEdad || !!errors.phone || !!errors.email || !!errors.typeRegister

  return { errors, hasError }
}

const onValidateStep2 = (formState) => {
  const { empresa, industria, cargo, pais, calleNumero, codigoPostal, colonia, municipio, ciudad, estado } = formState

  const errors = {
    empresa: '',
    industria: '',
    cargo: '',
    pais: '',
    calleNumero: '',
    codigoPostal: '',
    colonia: '',
    municipio: '',
    ciudad: '',
    estado: ''
  }

  if (empresa.length === 0) {
    errors.empresa = defaultError
  }

  if (industria.length === 0) {
    errors.industria = defaultError
  }

  if (cargo.length === 0) {
    errors.cargo = defaultError
  }

  if (pais.length === 0) {
    errors.pais = defaultError
  }

  if (calleNumero.length === 0) {
    errors.calleNumero = defaultError
  }

  if (codigoPostal.length === 0) {
    errors.codigoPostal = defaultError
  }

  if (colonia.length === 0) {
    errors.colonia = defaultError
  }

  if (municipio.length === 0) {
    errors.municipio = defaultError
  }

  if (ciudad.length === 0) {
    errors.ciudad = defaultError
  }

  if (ciudad.length === 0) {
    errors.ciudad = defaultError
  }

  if (estado.length === 0) {
    errors.estado = defaultError
  }

  const hasError = !!errors.empresa || !!errors.industria || !!errors.cargo || !!errors.pais || !!errors.calleNumero || !!errors.codigoPostal || !!errors.colonia || !!errors.municipio || !!errors.ciudad || !!errors.estado
  return { errors, hasError }
}

const onValidateStep3 = (formState) => {
  const { name, phone } = formState

  const errors = {
    comoTeEnteraste: '',
    productoInteres: '',
    nivelInfluencia: '',
    serExpositor: ''
  }

  if (phone.length === 0) {
    errors.phone = defaultError
  }

  if (name.length === 0) {
    errors.name = defaultError
  }

  const hasError = !!errors.name || !!errors.phone
  return { errors, hasError }
}

export const onValidate = (stepNo, formState) => {
  switch (stepNo) {
    case 1:
      return onValidateStep1(formState)
    case 2:
      return onValidateStep2(formState)
    case 3:
      return onValidateStep3(formState)
    default:
      return { errors: {}, hasError: false }
  }
}
