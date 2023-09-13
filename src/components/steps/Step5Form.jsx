import thankyouLogo from '../../assets/images/icon-thank-you.svg'

export function Step5Form () {
  return (
    <div className='form-container column-flex-center gap-1'>
      <img className='thank-you-logo' src={thankyouLogo} alt='thank you logo' />
      <h2 className='text-center'>Thank you</h2>
      <p className='mb-1 text-center'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  )
}
