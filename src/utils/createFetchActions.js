export default (prefix, name) => {
  const requestType = `${prefix}${name}_REQUEST`;
  const successType = `${prefix}${name}_SUCCESS`;
  const failType = `${prefix}${name}_FAIL`;

  return {
    requestType,
    successType,
    failType,
    fetch(payload) {
      return {
        type: requestType,
        payload
      };
    },
    success(payload) {
      return {
        type: successType,
        payload
      };
    },
    fail(payload) {
      return {
        type: failType,
        payload
      };
    }
  };
};
