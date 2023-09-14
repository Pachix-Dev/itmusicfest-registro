import { useForm } from '../../state/FormContext'

const STEPS = {
  step1: {
    number: 1,
    title: 'Paso 1',
    description: 'Tu información'
  },
  step2: {
    number: 2,
    title: 'Paso 2',
    description: 'Empresa / Institución'
  },
  step3: {
    number: 3,
    title: 'Paso 3',
    description: 'Encuesta'
  },
  step4: {
    number: 4,
    title: 'Paso 4',
    description: 'Completado'
  }
}

const STEPS_ARRAY = [STEPS.step1, STEPS.step2, STEPS.step3, STEPS.step4]
const MAX_STEP = STEPS_ARRAY.length

// Mobile Sidebar Icons rendered at the top
export function StepsSidebar () {
  const formState = useForm()
  const activeStep = Math.min(formState.currentStep, MAX_STEP)

  return (
    <div className='step-container'>
      {STEPS_ARRAY.map((step) => {
        const classString = step.number === activeStep ? 'step active' : 'step'
        return (
          <div key={step.number} className='flex gap-1 desktop-sidebar'>
            <div key={step.number} className={classString}>
              {step.number}
            </div>
            <div className='desktop-only flex-col'>
              <p>{step.title}</p>
              <p className='text-white font-semibold'>{step.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
