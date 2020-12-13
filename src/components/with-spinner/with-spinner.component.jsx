import React from 'react';

import Spinner from '../spinner/spinner.component'

// this is higher order component HOC function
const WithSpinner = WrappedComponent =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ?
      <Spinner />
      :
      <WrappedComponent {...otherProps} />
  }

export default WithSpinner;