import { REDUCER_ACTIONS } from '../../reducers/FormContext';
import { ADD_ONS } from '../../constants';
import { CheckmarkButton } from './CheckmarkButton';
import { formatCost } from './utility';

// optional: move data into data json
export function Step3Form({formState, dispatch }) {
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