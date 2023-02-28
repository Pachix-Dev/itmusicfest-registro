import { useState, useEffect } from "react";
import "./App.css";
import { PLAN, ADD_ONS } from "./constants";
import {
  formatCost,
  formatPlanCostSummary,
  formatPlanIdSummary,
  getAddOnCost,
  getTotalCost,
} from "./components/form/utility";
import { StepsSidebar } from "./components/form/StepsSidebar";
import { Step1Form } from "./components/form/Step1Form";
import { Step2Form } from "./components/form/Step2Form";
import { Step5Form } from "./components/form/Step5Form";
import {
  onValidateStep1,
  onValidateStep2,
} from "./components/form/validateForm";
import checkmark from "./assets/images/icon-checkmark.svg";

import {
  FormProvider,
  REDUCER_ACTIONS,
  useForm,
  useFormDispatch,
} from "./reducers/FormContext";

function CheckmarkButton({
  checked,
  title,
  description,
  name,
  value,
  onChange,
  cost,
}) {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <div className="radio-button-container">
        <img className="checkmark-logo" src={checkmark} alt={`${title} logo`} />
        <div className="radio-text-container">
          <h4 className="radio-title">{title}</h4>
          <p className="radio-description">{description}</p>
        </div>
        <div className="checkmark-cost">{cost}</div>
      </div>
    </label>
  );
}

// optional: move data into data json
function Step3Form() {
  const formState = useForm();
  const dispatch = useFormDispatch();
  const isYearly = formState.isYearly;
  const HAS_PLUS = true; // adds plus sign to cost

  const handleCheckmarkChange = (e) => {
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: e.target.name,
      payload: e.target.checked,
    });
  };

  return (
    <div className="form-container">
      <h2>Pick add-ons</h2>
      <p className="mb-1">Add-ons help enhance your gaming experience</p>
      <div id="select-add-ons">
        <CheckmarkButton
          name="add_on_multiplayer"
          title={ADD_ONS.add_on_multiplayer.title}
          description={ADD_ONS.add_on_multiplayer.description}
          value={ADD_ONS.add_on_multiplayer.value}
          cost={
            isYearly
              ? formatCost(
                  ADD_ONS.add_on_multiplayer.cost.yearly,
                  isYearly,
                  HAS_PLUS
                )
              : formatCost(
                  ADD_ONS.add_on_multiplayer.cost.monthly,
                  isYearly,
                  HAS_PLUS
                )
          }
          checked={formState.add_on_multiplayer}
          onChange={handleCheckmarkChange}
        />
        <CheckmarkButton
          name="add_on_storage"
          title={ADD_ONS.add_on_storage.title}
          description={ADD_ONS.add_on_storage.description}
          value={ADD_ONS.add_on_storage.value}
          cost={
            isYearly
              ? formatCost(
                  ADD_ONS.add_on_storage.cost.yearly,
                  isYearly,
                  HAS_PLUS
                )
              : formatCost(
                  ADD_ONS.add_on_storage.cost.monthly,
                  isYearly,
                  HAS_PLUS
                )
          }
          checked={formState.add_on_storage}
          onChange={handleCheckmarkChange}
        />
        <CheckmarkButton
          name="add_on_profile"
          title={ADD_ONS.add_on_profile.title}
          description={ADD_ONS.add_on_profile.description}
          value={ADD_ONS.add_on_profile.value}
          cost={
            isYearly
              ? formatCost(
                  ADD_ONS.add_on_profile.cost.yearly,
                  isYearly,
                  HAS_PLUS
                )
              : formatCost(
                  ADD_ONS.add_on_profile.cost.monthly,
                  isYearly,
                  HAS_PLUS
                )
          }
          checked={formState.add_on_profile}
          onChange={handleCheckmarkChange}
        />
      </div>
    </div>
  );
}


/**
 *
 * @param {string} addOn add_on_multiplayer, add_on_profile, add_on_storage
 * @returns {JSX.Element}
 */
export function AddOnRow({ addOnEnum, isYearly }) {
  const { title } = ADD_ONS[addOnEnum];
  const addOnCost = getAddOnCost(addOnEnum, isYearly);
  const costString = formatCost(addOnCost, isYearly, true);

  return (
    <div className="summary-row">
      <p>{title}</p>
      <div className="summary-cost">{costString}</div>
    </div>
  );
}


function Step4Form({ setStepNo }) {
  const formState = useForm();
  const planIdSummary = formatPlanIdSummary(formState);
  const planCost = formatPlanCostSummary(formState);
  const { add_on_multiplayer, add_on_storage, add_on_profile } = formState;
  const totalCost = formatCost(
    getTotalCost(formState),
    formState.isYearly,
    true
  );

  // if no planId or yearly selection is made: go back to step 2.
  useEffect(() => {
    if (planIdSummary === null) {
      console.log("redirecting: user has not selected planId or isYearly yet ");
      setStepNo(2);
    }
  }, [planIdSummary]);

  return (
    <div className="form-container">
      <h2>Finishing up</h2>
      <p className="mb-1">Double-check everything looks OK before confirming</p>
      <div className="summary">
        <div className="summary-row border-b">
          <div>
            <p className="text-primary text-bold-600">{planIdSummary}</p>
            <p className="internal-link" onClick={() => setStepNo(2)}>
              change
            </p>
          </div>
          <div className="text-primary text-bold-600">{planCost}</div>
        </div>
        {add_on_multiplayer && (
          <AddOnRow
            addOnEnum="add_on_multiplayer"
            isYearly={formState.isYearly}
          />
        )}
        {add_on_storage && (
          <AddOnRow addOnEnum="add_on_storage" isYearly={formState.isYearly} />
        )}
        {add_on_profile && (
          <AddOnRow addOnEnum="add_on_profile" isYearly={formState.isYearly} />
        )}
      </div>
      <div className="summary-row p-1">
        <p className="text-bold-600">{`Total (per ${
          formState.isYearly ? "year" : "month"
        })`}</p>
        <p className="text-secondary text-bold-600">{totalCost}</p>
      </div>
    </div>
  );
}


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
