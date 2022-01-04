import * as React from "react";       

const PlusSignSmall = (props) => ( 
  <svg
    className='plus-small'
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.75 12h16.5M12 3.75v16.5"  
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlusSignSmall;