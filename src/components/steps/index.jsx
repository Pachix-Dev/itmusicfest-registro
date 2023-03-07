import { useForm } from "../../state/FormContext";

import { Step1Form } from "./Step1Form";
import { Step2Form } from "./Step2Form";
import { Step3Form } from "./Step3Form";
import { Step4Form } from "./Step4Form";
import { Step5Form } from "./Step5Form";
import { Footer } from "./Footer";

/**
 * Given a step, will render the proper StepForm
 * @param {} step : number
 * @returns StepForm function that returns a JSX.Element component
 */
function getStepform(step = 1) {
  switch (step) {
    case 1:
      return Step1Form;
    case 2:
      return Step2Form;
    case 3:
      return Step3Form;
    case 4:
      return Step4Form;
    case 5:
      return Step5Form;
    default:
      return Step1Form;
  }
}


export const StepForm = () => {
  const formState = useForm();
  const step = formState.currentStep;
  const StepForm = getStepform(step);

  return (
    <>
      <StepForm />
      <Footer/>
    </>
  );
};
