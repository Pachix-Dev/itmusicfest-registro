import { useEffect } from "react";
import {
  useForm,
  useFormDispatch,
  REDUCER_ACTIONS,
} from "../../../state/FormContext";
import {
  formatCost,
  formatPlanIdSummary,
  formatPlanCostSummary,
  getTotalCost,
} from "../utility";
import { AddOnRow } from "./AddOnRow";

export function Step4Form() {
  const formState = useForm();
  const dispatch = useFormDispatch();
  const planIdSummary = formatPlanIdSummary(formState);
  const planCost = formatPlanCostSummary(formState);
  const { add_on_multiplayer, add_on_storage, add_on_profile } = formState;
  const totalCost = formatCost(
    getTotalCost(formState),
    formState.isYearly,
    true
  );

  // Actions
  const onToggleIsYearly = (formState) => {
    const newValue = !formState.isYearly;
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: "isYearly",
      payload: newValue,
    });
  };

  const setStepNo = (step) => {
    dispatch({
      type: REDUCER_ACTIONS.SET_STEP,
      payload: step,
    });
  };

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
            <p className="text-primary font-semibold">{planIdSummary}</p>
            <p className="internal-link" onClick={() => onToggleIsYearly(formState)}>
              change
            </p>
          </div>
          <div className="text-primary font-semibold">{planCost}</div>
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
        <p className="font-semibold">{`Total (per ${
          formState.isYearly ? "year" : "month"
        })`}</p>
        <p className="text-secondary font-semibold">{totalCost}</p>
      </div>
    </div>
  );
}
