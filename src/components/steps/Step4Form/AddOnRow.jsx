import { ADD_ONS } from "../../../constants";
import { getAddOnCost, formatCost } from "../utility";

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
