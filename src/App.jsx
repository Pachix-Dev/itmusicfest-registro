import { useState } from "react";
import "./App.css";

import { StepsSidebar } from "./components/form/StepsSidebar";
import { Step1Form } from "./components/form/Step1Form";
import { Step2Form } from "./components/form/Step2Form";
import { Step3Form } from "./components/form/Step3Form";
import { Step4Form } from "./components/form/Step4Form";
import { Step5Form } from "./components/form/Step5Form";
import {
  onValidateStep1,
  onValidateStep2,
} from "./components/form/validateForm";

import {
  FormProvider,
  REDUCER_ACTIONS,
  useForm,
  useFormDispatch,
} from "./reducers/FormContext";

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

/**
 * Renders the form submit and back button based on step number.
 * @param {*} param0
 * @returns
 */
function SubmitButton({ stepNo, onNextStep, onBackStep, onValidate }) {
  return (
    <>
      <button
        className={stepNo === 4 ? "bg-color-secondary" : undefined}
        type="submit"
        onClick={onNextStep}
      >
        {stepNo < 4 ? "Next Step" : "Confirm"}
      </button>
      {stepNo > 1 && (
        <button className="back-button" onClick={onBackStep}>
          Go Back
        </button>
      )}
    </>
  );
}

/**
 * Top level App component includes the Form Provider which includes form dispatch and formState in FormContext
 * @returns
 */
function App() {
  const [stepNo, setStepNo] = useState(1);
  const StepForm = getStepform(stepNo);
  const formState = useForm();
  const dispatch = useFormDispatch();

  const onValidate = () => {
    switch (stepNo) {
      case 1:
        return onValidateStep1(formState);
      case 2:
        return onValidateStep2(formState);
      default:
        return { errors: {}, hasError: false };
    }
  };

  const updateError = (errors) => {
    dispatch({
      type: REDUCER_ACTIONS.SET_ERROR,
      payload: errors,
    });
  };

  const onNextStep = () => {
    const { errors, hasError } = onValidate();
    updateError(errors); // will update or clear errors
    if (!hasError) {
      setStepNo(Math.min(stepNo + 1, 5));
    }
  };

  const onBackStep = () => {
    setStepNo(Math.max(stepNo - 1, 1));
  };

  return (
    <div className="App">
      <StepsSidebar activeStep={Math.min(stepNo, 4)} />
      <StepForm
        formState={formState}
        dispatch={dispatch}
        setStepNo={setStepNo}
      />
      {stepNo <= 4 && (
        <footer>
          <SubmitButton
            stepNo={stepNo}
            onNextStep={onNextStep}
            onBackStep={onBackStep}
          />
        </footer>
      )}
    </div>
  );
}

function AppContainer() {
  return (
    <FormProvider>
      <App />
    </FormProvider>
  );
}

export default AppContainer;
