import React from 'react';
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const admin = useSelector((state) => state.user.isAdmin)


  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin ?
          (
            children
          )
          :
          (
            <Redirect
              to={{
                pathname: "/admin/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;