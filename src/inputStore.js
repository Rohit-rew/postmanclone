
let defaultMethod = "params";

export const InputReducer = () => {
  const currMethod = setReqMethod({action : '' , payload : ''});

  return {
    getMethod: () => currMethod,
    setmethod: ({ action, payload }) =>
      setReqMethod({ action, payload }, currMethod),
  };
};

const setReqMethod = ({ action, payload }, state = defaultMethod) => {
  switch (action) {
    case "CHANGE":
      defaultMethod = payload;
      return;
    default:
      return state;
  }
};