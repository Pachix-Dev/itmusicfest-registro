import { useForm, useFormDispatch, REDUCER_ACTIONS } from "../../state/FormContext";
import { SubmitButton } from "../form/SubmitButton";
import { onValidate } from "./validateForm";

/**
 * Returns a jsx element or undefined based on step number
 * @returns {JSX.Element | undefined}
 */
export const Footer = () => {
  const formState = useForm();
  const dispatch = useFormDispatch();
  const currentStep = formState.currentStep;

  const updateError = (errors) => {
    dispatch({
      type: REDUCER_ACTIONS.SET_ERROR,
      payload: errors,
    });
  };

  const setStep = (step) => {
    dispatch({
      type: REDUCER_ACTIONS.SET_STEP,
      payload: step,
    });
  }

  const onNextStep = () => {
    const { errors, hasError } = onValidate(currentStep, formState);
    updateError(errors); // will update or clear errors
    if (!hasError) {
      setStep(Math.min(currentStep + 1, 5))
    }
  };

  const onBackStep = () => {
    setStep(Math.max(currentStep - 1, 1));
  };


  if (currentStep <= 4) {
    return (
      <footer className="absolute pr-2">
        <SubmitButton
          stepNo={currentStep}
          onNextStep={onNextStep}
          onBackStep={onBackStep}
        />
      </footer>
    );
  }

  return undefined;
};