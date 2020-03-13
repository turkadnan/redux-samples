import React from "react";
const FilterLink = ({ children, trigger }) => {  
  return <button onClick={trigger}>{children}</button>;
};

export default FilterLink;
