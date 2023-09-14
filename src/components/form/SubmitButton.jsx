/**
 * Renders the form submit and back button based on step number.
 * @param {*} param0
 * @returns
 */
export function SubmitButton ({ stepNo, onNextStep, onBackStep }) {
  return (
    <>
      <button
        className={stepNo === 3 ? 'bg-color-secondary' : undefined}
        type='submit'
        onClick={onNextStep}
      >
        {stepNo < 3 ? 'Next Step' : 'Confirm'}
      </button>
      {stepNo > 1 && (
        <button className='back-button' onClick={onBackStep}>
          Go Back
        </button>
      )}
    </>
  )
}
