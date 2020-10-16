import React from 'react'
import CardExpSingle from "./CardExpSingle"

const Example = ({info}) => {
  return (
    <div>
      
    {info.map( (x) => <CardExpSingle info={x} key={x.id} />)}
    </div>
  );
};

export default Example;