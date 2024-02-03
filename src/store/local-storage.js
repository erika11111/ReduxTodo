//loading data from local storage
export const loadState = () => {
  //using try catch in case if user doesn't allow to access local storage
  try {
    //key with name state
    const savedState = localStorage.getItem("state");
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};
// saving current state to local storage
export const saveState = (state) => {
  try {
    const stateToBeSaved = JSON.stringify(state);
    localStorage.setItem("state", stateToBeSaved);
  } catch (error) {
    console.error(error);
  }
};
