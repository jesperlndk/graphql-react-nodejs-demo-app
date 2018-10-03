import React from 'react';
import { ErrorIndicator } from '.';

const NotFoundError = () => (
  <ErrorIndicator
    backgroundColor="#555"
    textColor="white"
    height={500}
    text="Sorry, we couldn’t find that page. Please try retyping the address or just head back to our home page."
  />
);

export default NotFoundError;
