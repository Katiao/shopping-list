import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  //when component renders, we'll have our callback function after 3 seconds that
  //calls remove alert, which calls showAlert which already has false and empty defaults
  //so it will hide alert
  //cleanup function to clear timeout
  //we added list in the dependency array so that everytime there are changes to the list
  //we clear out the old timeout and the timeout starts at 3seconds again
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
