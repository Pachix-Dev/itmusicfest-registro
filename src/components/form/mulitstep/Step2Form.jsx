import { REDUCER_ACTIONS } from "../../../reducers/FormContext";
import { RadioButton } from '../RadioButton';
import { ToggleSwitch } from '../ToggleSwitch';
import {PLAN} from '../../../constants';
import {formatCost} from '../utility';

export function Step2Form({formState, dispatch}) {
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
          <span className="text-red font-medium">
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