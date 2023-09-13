import { StepsSidebar } from '../components/steps/StepsSidebar'
import { StepForm } from '../components/steps'

export const MobileLayout = () => {
  return (
    <div className='mobile-only'>
      <StepsSidebar />
      <StepForm />
    </div>
  )
}
