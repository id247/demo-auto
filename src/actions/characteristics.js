const prefix = 'characteristics/';

export const ADD_CHARACERISTIC = `${prefix}ADD_CHARACERISTIC`;

export const addCharaceristic = payload => {
  return {
    type: ADD_CHARACERISTIC,
    payload
  };
};
