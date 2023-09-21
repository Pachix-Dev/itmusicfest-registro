import React, { useEffect, useState } from 'react'
import axios from 'axios'
import thankyouLogo from '../../assets/images/icon-thank-you.svg'
import { useForm } from '../../state/FormContext'

export function Step5Form () {
  const formState = useForm()
  const [confirmationData, setConfirmationData] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const postData = async () => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      try {
        setMessage('Enviando información...')
        await axios.post('http://3.14.118.246:1234/register', formState, options)
        // const { data } = await axios.post('http://localhost:1234/register', formState, options)
        setConfirmationData(true)
      } catch (error) {
        if (error?.response?.data?.sqlState === '23000') {
          setMessage('Gracias por participar ya te encuentras registrado...')
        } else {
          setMessage('No se pudo crear tu registro en este momento inténtalo mas tarde...')
        }
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
          <p>{message}</p>
          )}
    </div>
  )
}
