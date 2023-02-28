import {useEffect} from 'react';
import { ADD_ONS } from '../../constants';
import { getAddOnCost, formatCost, formatPlanIdSummary, formatPlanCostSummary, getTotalCost } from './utility';

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


export function Step4Form({ formState, setStepNo }) {
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
