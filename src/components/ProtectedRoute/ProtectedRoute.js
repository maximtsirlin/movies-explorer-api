import React from "react";
import { Route, useNavigate, Navigate } from "react-router-dom";

export default ({ children, ...props }) => {
    console.log('props.loggedIn', props.loggedIn);
    if (!props.loggedIn) {
        return <Navigate to="/signin" replace />;
    }
    return children;
};
