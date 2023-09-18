import React, { useEffect, useState } from 'react'
import axios from 'axios'
import thankyouLogo from '../../assets/images/icon-thank-you.svg'
import { useForm } from '../../state/FormContext'

export function Step5Form () {
  const formState = useForm()
  const [confirmationData, setConfirmationData] = useState(null)

  useEffect(() => {
    const postData = async () => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      try {
        const { data } = await axios.post('http://3.133.150.190:1234/register', formState, options)
        // const { data } = await axios.post('http://localhost:1234/register', formState, options)
        setConfirmationData(true)
        console.log('Data:', data)
      } catch (error) {
        console.log('Error:', error)
      }
    }

    postData()
  }, [formState])

  return (
    <div className='form-container column-flex-center gap-1'>
      {confirmationData
        ? (
          <>
            <img className='thank-you-logo' src={thankyouLogo} alt='thank you logo' />
            <h2 className='text-center'>Gracias por participar</h2>
            <p className='mt-3 mb-1 text-center'>
              <strong>
                SI ERES ELEGIDO RECIBIRÁS UN <span className='text-danger'>MAIL DE CONFIRMACIÓN</span> EL DÍA 3 DE OCTUBRE
              </strong>
            </p>
          </>
          )
        : (
          <p>Enviando información...</p>
          )}
    </div>
  )
}
