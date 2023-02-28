// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const defaultError = "This field is required";

/**
 * a function that validates the step1 form inputs. 
 * @param {*} formState
 * @returns
 */
export const onValidateStep1 = (formState) => {
  const { name, email, phone } = formState;
  // default: empty strings
  const errors = {
    name: "",
    email: "",
    phone: "",
  };

  if (name.length === 0) {
    errors.name = defaultError;
  }

  if (email.length === 0) {
    errors.email = defaultError;
  } else if (!emailRegExp.test(email)) {
    errors.email = "Must enter a valid email";
  }

  if (phone.length === 0) {
    errors.phone = defaultError;
  }

  const hasError = !!errors.name || !!errors.email || !!errors.phone;
  return { errors, hasError };
};

export const onValidateStep2 = (formState) => {
  const { plan_id } = formState;
  const errors = {
    plan_id: undefined,
  };

  if (plan_id == undefined) {
    errors.plan_id = "You must select an option.";
  }

  const hasError = !!errors.plan_id;
  return { errors, hasError };
};