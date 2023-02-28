import { PLAN, ADD_ONS } from "../../constants";

/**
 * formats the cost into a per year or per month string
 * @param {number} number integer dollar amount
 * @param {boolean} isYearly boolean of whether to charge yearly or monthly
 * @param {boolean} plus boolean of whether to add a "+" to the format
 * @returns formatted cost string per month/year
 */
export const formatCost = (number, isYearly = false, plus = false) => {
  const cost = isYearly ? `$${number}/yr` : `$${number}/mo`;
  return `${plus ? "+" : ""}` + cost;
};

/**
 *
 * @param {*} formState - see initialFormState in FormContext
 * return formated summary string or null
 */
export const formatPlanIdSummary = (formState) => {
  const { plan_id, isYearly } = formState;
  if (plan_id != undefined && isYearly != undefined) {
    const timeUnit = isYearly ? "Yearly" : "Monthly";
    return `${PLAN[plan_id].title} (${timeUnit})`;
  }
  return null;
};

/**
 *
 * @param {string} plan_id
 * @param {boolean} isYearly
 * @returns
 */
const getPlanCost = (plan_id, isYearly) => {
  if (plan_id != undefined && isYearly != undefined) {
    const timeUnit = isYearly ? "yearly" : "monthly";
    const cost = PLAN[plan_id].cost[timeUnit];
    return cost;
  }
  return null;
};

/**
 *
 * @param {*} formState - see initialFormState in FormContext
 * return formated plan cost summary string or null
 */
export const formatPlanCostSummary = (formState) => {
  const { plan_id, isYearly } = formState;
  if (plan_id != undefined && isYearly != undefined) {
    const cost = getPlanCost(plan_id, isYearly);
    return formatCost(cost, isYearly);
  }
  return null;
};

/**
 *
 * @param {string} addOnEnum
 * @param {boolean} isYearly
 * @returns {number}
 */
export const getAddOnCost = (addOnEnum, isYearly) => {
  const { cost } = ADD_ONS[addOnEnum];
  const perCost = isYearly ? cost.yearly : cost.monthly;
  return perCost;
};

export const getTotalCost = (formState) => {
  const {
    isYearly,
    plan_id,
    add_on_multiplayer,
    add_on_storage,
    add_on_profile,
  } = formState;

  try {
    const planCost = getPlanCost(plan_id, isYearly);
    const multiplayerCost = add_on_multiplayer
      ? getAddOnCost("add_on_multiplayer", isYearly)
      : 0;
    const storageCost = add_on_storage
      ? getAddOnCost("add_on_storage", isYearly)
      : 0;
    const profileCost = add_on_profile
      ? getAddOnCost("add_on_profile", isYearly)
      : 0;
    return planCost + multiplayerCost + storageCost + profileCost;
  } catch (e) {
    console.error(e);
    return null;
  }
};
