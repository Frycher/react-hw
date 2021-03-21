import React, { forwardRef } from 'react';
const Input = forwardRef(({ type, ...props }, ref) => {
  return <input type={type} ref={ref} className="input" {...props} />;
});
export default Input;
