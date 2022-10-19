import React, { useState } from "react";
/*
This js contains Login authentication Method using Context Api
 */
// Context creation with one state and 3 methods -Set login user,
// get Login user and Logout
export const LoginContext = React.createContext({
  userLoginState: {},
  setLoginUser: () => {},
  getLoginUser: () => {},
  logOut: () => {},
});

//This is the usecontext hook used by other components to access data
export const useLoginContext = () => React.useContext(LoginContext);

export const AuthContext = (props) => {
  const [userLoginState, setuserLoginState] = useState([]);
  // setLoginUser is to set api response from Login component using localStorage
  const setLoginUser = (data) => {
    if (data) {
      localStorage.setItem("loginDetails", JSON.stringify(data));
      setuserLoginState(data);
    }
  };
  //getLoginUser is to fetch the data stored in localStorage memory
  // response object of Login is stored in localStorage
  const getLoginUser = () => {
    let loginUserData = localStorage.getItem("loginDetails");
    if (loginUserData) {
      return JSON.parse(loginUserData);
    } else {
      return false;
    }
  };

  // logOut to clear the localStorage data
  const logOut = () => {
    localStorage.removeItem("loginDetails");
    setLoginUser(null);
  };
  return (
    // Context provider with login state setting data , fetching data logout
    //,set and clear tournament id
    <LoginContext.Provider
      value={{
        userLoginState,
        setLoginUser,
        getLoginUser,
        logOut,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
//handleTournamentId is used to set get and clear the tournament
// based on Give entry click from Home component
export const handleTournamentId = {
  // This is to set tournament id to local storage
  // This is based on upcoming tournament
  setTournId: (tournId) => {
    if (tournId) {
      localStorage.setItem("tournId", tournId);
      //incase false?
    }
  },
  // This is to get tournament id from local storage
  getTournId: () => {
    return localStorage.getItem("tournId");
  },
  // This is to clear tournament id from local storage
  clearTournId: () => {
    localStorage.removeItem("tournId");
  },
};
