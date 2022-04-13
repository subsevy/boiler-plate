import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authUser } from "../actions/user_action";

// option: null(all) true(logged) false(unlogged)
// adminRoute: true(only admin)
const auth = (Component, option, adminRoute = null) => {
  function AuthenticattionCheck(props) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(authUser()).then((response) => {
        if (!response.payload.isAuth) {
          if (option) navigate("/login");
        } else {
          if (adminRoute && !response.payload.isAdmin) navigate("/");
          if (option === false) navigate("/");
        }
      });
    }, [dispatch, navigate]);

    return <Component {...props} user={user}></Component>;
  }

  return AuthenticattionCheck;
};

export default auth;
