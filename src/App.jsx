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

/**
 * This styled radio button includes a button feel with borders, hover effects, logo, description
 * and conditional description based on whether isYearly is passed in.
 *
 * Would need to refactor if isYearly conditional changes.
 *
 * Radio html element chosen to allow user to only select one item.
 *
 * @param {*} param0
 * @returns
 */
function RadioButton({
  checked,
  title,
  description,
  name,
  value,
  logoSrc = arcadeLogo,
  isYearly,
  onChange,
}) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <div className="radio-button-container">
        <img className="img-logo" src={logoSrc} alt={`${title} logo`} />
        <div className="radio-text-container">
          <h4 className="radio-title">{title}</h4>
          <p className="radio-description">{description}</p>
          {isYearly && <p className="radio-description-2">2 months free</p>}
        </div>
      </div>
    </label>
  );
}

/**
 * This component is based of the toggle switch from w3schools
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
 *
 * Since the underlying input element is a checkbox, the controlled component
 * needs to know when it is checked and the onChange handler needs to examine
 * e.target.checked on the onChange handler.
 *
 * Since we rely on dispatch actions, we bubble up the event instead of just the
 * checked value
 *
 * @param {*} param0
 * @returns
 */
function ToggleSwitch({ name, checked, onChange }) {
  return (
    <label name={name} className="switch">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e)}
        // onChange={e => onChange(e.target.checked)}
      />
      <span className="slider round"></span>
    </label>
  );
}

function Step2Form() {
  const formState = useForm();
  const dispatch = useFormDispatch();
  const isYearly = formState.isYearly;

  const handleCheckmarkChange = (e) => {
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: e.target.name,
      payload: e.target.checked,
    });
  };

  const handleRadioChange = (e) => {
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <p className="min-height-1 mb-1">
        {formState.errors.plan_id && (
          <span className="text-red font-weight-500">
            {formState.errors.plan_id}
          </span>
        )}
      </p>
      <div id="select-plan-id">
        <RadioButton
          checked={formState.plan_id === PLAN.arcade.value}
          title={PLAN.arcade.title}
          description={
            isYearly
              ? formatCost(PLAN.arcade.cost.yearly, isYearly)
              : formatCost(PLAN.arcade.cost.monthly, isYearly)
          }
          logoSrc={PLAN.arcade.logoSrc}
          value={PLAN.arcade.value}
          name="plan_id"
          isYearly={isYearly}
          onChange={handleRadioChange}
        />
        <RadioButton
          checked={formState.plan_id === PLAN.advanced.value}
          title={PLAN.advanced.title}
          description={
            isYearly
              ? formatCost(PLAN.advanced.cost.yearly)
              : formatCost(PLAN.advanced.cost.monthly)
          }
          logoSrc={PLAN.advanced.logoSrc}
          value={PLAN.advanced.value}
          name="plan_id"
          isYearly={isYearly}
          onChange={handleRadioChange}
        />
        <RadioButton
          checked={formState.plan_id === PLAN.pro.value}
          title={PLAN.pro.title}
          description={
            isYearly
              ? formatCost(PLAN.pro.cost.yearly)
              : formatCost(PLAN.pro.cost.monthly)
          }
          logoSrc={PLAN.pro.logoSrc}
          value={PLAN.pro.value}
          name="plan_id"
          isYearly={isYearly}
          onChange={handleRadioChange}
        />
      </div>
      <div className="switch-row">
        <p className="text-primary">Monthly</p>
        <ToggleSwitch
          name="isYearly"
          checked={isYearly}
          onChange={handleCheckmarkChange}
        />
        <p>Yearly</p>
      </div>
    </div>
  );
}

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

// todo Form validator
// const useFormValidate = (stepNo, formState) => {
//   switch (stepNo) {
//     case 1:
//       ["name", "email", "phone"].map(field => {
//         formState[field]
//       })
//   }
// };

/**
 * Renders the form submit and back button based on step number.
 * @param {*} param0
 * @returns
 */
function SubmitButton({ stepNo, onNextStep, onBackStep }) {
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
