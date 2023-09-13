import { createContext, useContext, useReducer } from 'react'

const FormContext = createContext(null)
const FormDispatchContext = createContext(null)

// custom hook to allow us to access formState
export function useForm () {
  return useContext(FormContext)
}

// custom hook to allow us to access formDispatch
export function useFormDispatch () {
  return useContext(FormDispatchContext)
}

// actions stored in ENUM for future action support
export const REDUCER_ACTIONS = {
  UPDATE_INPUT: 'UPDATE_INPUT',
  SET_STEP: 'SET_STEP',
  SET_ERROR: 'SET_ERROR'
}

const initialFormState = {
  currentStep: 1,
  name: '',
  email: '',
  phone: '',
  ageRange: '',
  isYearly: false,
  plan_id: undefined,
  add_on_multiplayer: false,
  add_on_storage: false,
  add_on_profile: false,
  errors: {
    name: undefined,
    email: undefined,
    phone: undefined,
    plan_id: undefined
  }
}

/**
 * Reducers are functions that take the current state and an action as arguments,
 * and return a new state result. (immutable)
 *
 * @param {*} state -- see initialFormState above
 * @param {*} action
 *
 * {
    type: REDUCER_ACTIONS.UPDATE_TEXT_INPUT,
    field: e.target.name,
    payload: e.target.value,
    }
 *
 * @returns new state
 *
 * Example Form Reducers
 * https://medium.com/swlh/usereducer-form-example-16675fa60229
 * https://itnext.io/handling-complex-form-state-using-react-hooks-45370515e47
 *
 */
const formReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTIONS.UPDATE_INPUT:
      return {
        ...state,
        [action.field]: action.payload
      }
    case REDUCER_ACTIONS.SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload
        }
      }
    case REDUCER_ACTIONS.SET_STEP:
      return {
        ...state,
        currentStep: action.payload
      }
    default:
      return state
  }
}

/**
 * We use a FormProvider: reducer and context paradigm to allow form state
 * to be shared across different steps. This shared state allows us to revist
 * state.
 * @param {*} param0
 * @returns
 *
 * BOILERPLATE from reducer and context react docs:
 * https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context
 *
 */
export function FormProvider ({ children }) {
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  return (
    <FormContext.Provider value={formState}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  )
}
