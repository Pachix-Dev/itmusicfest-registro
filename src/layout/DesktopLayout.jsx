import { StepsSidebar } from '../components/steps/StepsSidebar'
import { StepForm } from '../components/steps'

// Desktop
// note a pure css solution was tried (i.e. desktop-only css class),
// but css can only hide the element
// if the element will still exists, there is additional complexity with naming
// collisions (i.e. radio single selection)
export const DesktopLayout = () => {
  return (
    <div className='desktop-only desktop-app bg-white p-1 rounded '>
      <StepsSidebar />
      <div className='relative rounded max-w-30'>
        <StepForm />
      </div>
    </div>
  )
}
