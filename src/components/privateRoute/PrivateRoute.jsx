import React from 'react';
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import Spinner from '../spinner/spinner.component'

function PrivateRoute({ children, ...rest }) {
  const isAdmin = useSelector((state) => state.user.isAdmin)
  const isLoading = useSelector((state) => state.user.isLoading)


  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoading ?
          <Spinner/>
          :
          (isAdmin ?
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
          )
      }
    />
  );
}

export default PrivateRoute;