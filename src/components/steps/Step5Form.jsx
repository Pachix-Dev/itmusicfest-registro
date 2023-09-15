import thankyouLogo from '../../assets/images/icon-thank-you.svg'
import { useForm } from '../../state/FormContext'
import axios from 'axios'

export async function Step5Form () {
  const formState = useForm()
  console.log(formState)

  try {
    const { data } = await axios.post('http://3.133.150.190:1234/register', formState)
    console.log(data)
  } catch (e) {
    console.log(e)
  }

  return (
    <div className='form-container column-flex-center gap-1'>
      <img className='thank-you-logo' src={thankyouLogo} alt='thank you logo' />
      <h2 className='text-center'>Gracias por participar</h2>
      <p className='mt-3 mb-1 text-center'>
        <strong>SI ERES ELEGIDO RECIBIRÁS UN <span className='text-danger'>MAIL DE CONFIRMACIÓN</span> EL DÍA 3 DE OCTUBRE</strong>
      </p>
    </div>
  )
}
